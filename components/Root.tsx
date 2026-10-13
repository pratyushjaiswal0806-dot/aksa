'use client';
import { useEffect, useRef, type ReactNode } from 'react';
import type { CSS } from '@/lib/css';

const NAV_COLORS: Record<string, string> = {
  about: '#E8A83E', disciplines: '#315CFF', productions: '#D4382F', join: '#F4B860',
};
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

/**
 * Scroll engine + pointer engine.
 *
 * Per [data-scene] section it writes four CSS custom properties, all consumed via calc():
 *   --p  scene-centre offset from viewport centre, in viewport heights (parallax)
 *   --t  0–1 progress through the pinned height
 *   --a  first half 0–1,  --b  second half 0–1
 * Scenes within ~1 viewport get [data-on]: only they hold GPU layers and run CSS animations.
 * On the root: --prog (page progress), --navc / --on-* (active nav), --act1..4, --m (mobile),
 * --px/--nh (nav glow dot). Pointer targets [data-spot] get --mx/--my/--nx/--ny/--hv.
 * One rAF-throttled pass with no layout reads: scene positions are measured only on resize.
 */
export default function Root({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const scenes = [...root.querySelectorAll<HTMLElement>('[data-scene]')];
    let raf = 0;
    let last = '';

    // Page-level vars live on the elements that use them, NOT on the root: a custom property
    // changed on the root is inherited by every element and forces a whole-document restyle.
    const navEl = root.querySelector<HTMLElement>('nav');
    const railEl = root.querySelector<HTMLElement>('[data-rail]');
    let mob = '';
    const prev = scenes.map(() => '');

    // Scene positions are cached and only re-measured when layout actually changes, so the per-frame
    // update does no layout reads at all: a getBoundingClientRect here would force a style + layout
    // pass every frame (CSS animations keep style dirty) on top of the one the browser does anyway.
    const tops = new Array<number>(scenes.length).fill(0);
    const heights = new Array<number>(scenes.length).fill(0);
    let docH = 0;
    const measure = () => {
      const sy = scrollY;
      for (let i = 0; i < scenes.length; i++) {
        const r = scenes[i].getBoundingClientRect();
        tops[i] = r.top + sy;
        heights[i] = r.height;
      }
      docH = document.documentElement.scrollHeight;
    };

    const update = () => {
      raf = 0;
      const vh = innerHeight;
      const sy = scrollY;
      const m = innerWidth < 760 ? '1' : '0';
      if (m !== mob) { mob = m; root.style.setProperty('--m', m); }
      let nav: string | null = null;
      let act = 1;
      for (let i = 0; i < scenes.length; i++) {
        const s = scenes[i];
        const top = tops[i] - sy, h = heights[i], bottom = top + h;
        const on = !(bottom < -vh * 0.5 || top > vh * 1.5);
        if (prev[i] === 'off' && !on) continue;
        if (!on) { s.removeAttribute('data-on'); prev[i] = 'off'; continue; }
        if (prev[i] === 'off' || prev[i] === '') s.setAttribute('data-on', '');
        const p = (top + h / 2 - vh / 2) / vh;
        const t = clamp01(-top / Math.max(1, h - vh));
        const sig = `${p.toFixed(4)}|${t.toFixed(4)}`;
        if (sig !== prev[i]) {
          prev[i] = sig;
          s.style.setProperty('--p', p.toFixed(4));
          s.style.setProperty('--t', t.toFixed(4));
          s.style.setProperty('--a', clamp01(t * 2).toFixed(4));
          s.style.setProperty('--b', clamp01(t * 2 - 1).toFixed(4));
        }
        if (top <= vh * 0.5 && bottom > vh * 0.5) {
          nav = s.dataset.nav || null;
          act = Number(s.dataset.act);
        }
      }
      navEl?.style.setProperty('--prog', clamp01(sy / Math.max(1, docH - vh)).toFixed(4));
      const key = `${nav}|${act}`;
      if (key !== last) {
        last = key;
        for (const k of Object.keys(NAV_COLORS)) navEl?.style.setProperty(`--on-${k}`, k === nav ? '1' : '0');
        if (nav) navEl?.style.setProperty('--navc', NAV_COLORS[nav]);
        for (let i = 1; i <= 4; i++) railEl?.style.setProperty(`--act${i}`, i === act ? '1' : '0');
      }
    };
    const sched = () => { if (!raf) raf = requestAnimationFrame(update); };
    const remeasure = () => { measure(); sched(); };
    addEventListener('scroll', sched, { passive: true });
    addEventListener('resize', remeasure);
    // Any change to a scene's height (fonts loading, breakpoint styles) changes the root's height.
    const ro = new ResizeObserver(remeasure);
    ro.observe(root);
    measure();
    update();

    const links = root.querySelector<HTMLElement>('[data-links]');
    const onMove = (e: MouseEvent) => {
      const target = e.target as Element;
      if (links && links.contains(target)) {
        const b = links.getBoundingClientRect();
        links.style.setProperty('--px', `${e.clientX - b.left}px`);
        links.style.setProperty('--nh', '1');
      } else if (links) links.style.setProperty('--nh', '0');
      const sp = target.closest?.<HTMLElement>('[data-spot]');
      if (sp) {
        const b = sp.getBoundingClientRect();
        const x = e.clientX - b.left, y = e.clientY - b.top;
        sp.style.setProperty('--mx', `${x}px`);
        sp.style.setProperty('--my', `${y}px`);
        sp.style.setProperty('--nx', ((x / b.width) * 2 - 1).toFixed(3));
        sp.style.setProperty('--ny', ((y / b.height) * 2 - 1).toFixed(3));
        sp.style.setProperty('--hv', '1');
      }
    };
    const onOut = (e: MouseEvent) => {
      const sp = (e.target as Element).closest?.<HTMLElement>('[data-spot]');
      if (sp && !sp.contains(e.relatedTarget as Node | null)) {
        sp.style.setProperty('--hv', '0');
        sp.style.setProperty('--nx', '0');
        sp.style.setProperty('--ny', '0');
      }
    };
    root.addEventListener('mousemove', onMove);
    root.addEventListener('mouseout', onOut);
    return () => {
      removeEventListener('scroll', sched);
      removeEventListener('resize', remeasure);
      ro.disconnect();
      root.removeEventListener('mousemove', onMove);
      root.removeEventListener('mouseout', onOut);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const style: CSS = {
    '--m': 0,
    position: 'relative', background: '#151515', color: '#151515',
    overflowX: 'clip', fontFamily: 'var(--archivo)',
  };
  return <div ref={ref} data-root style={style}>{children}</div>;
}
