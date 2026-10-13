'use client';
import { useEffect, useState } from 'react';
import type { CSS } from '@/lib/css';

const MIN_MS = 1200; // long enough to read as an intro, not a stall
const MAX_MS = 6000; // never hold the page hostage on a slow asset

/**
 * House curtain shown until the page is ready (window load + webfonts), then raised.
 * It is server-rendered, so it covers the first paint before any JS runs, and it only lifts once React
 * has hydrated, so the scroll engine is running by then. Lifting earlier shows a frozen page whose
 * scroll-revealed content never appears. It is hidden by <noscript> when JS is off.
 * The page must not scroll underneath it, even before hydration. The curtain is its own tiny scroll container with
 * overscroll-behavior: contain, so wheel and touch scrolls stop there. Keys are blocked once JS runs.
 * overflow:hidden on <html> is avoided because it toggles the scrollbar and shifts the page sideways.
 */
export default function Loader() {
  const [state, setState] = useState<'down' | 'up' | 'gone'>('down');

  useEffect(() => {
    const start = performance.now();
    let done = false;
    // The show opens at the curtain: undo any scroll that happened before hydration (keyboard, or
    // the browser restoring a previous position), unless the URL points at a section.
    if (!location.hash) {
      history.scrollRestoration = 'manual';
      scrollTo({ top: 0, behavior: 'instant' });
    }
    const raise = () => {
      if (done) return;
      done = true;
      if (!location.hash) scrollTo({ top: 0, behavior: 'instant' });
      setTimeout(() => setState('up'), Math.max(0, MIN_MS - (performance.now() - start)));
    };
    const loaded = document.readyState === 'complete'
      ? Promise.resolve()
      : new Promise<void>(r => addEventListener('load', () => r(), { once: true }));
    Promise.all([loaded, document.fonts.ready]).then(raise);
    const cap = setTimeout(raise, MAX_MS);
    return () => clearTimeout(cap);
  }, []);

  useEffect(() => {
    if (state !== 'down') return;
    const keys = new Set([' ', 'ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End']);
    const block = (e: Event) => { if (!(e instanceof KeyboardEvent) || keys.has(e.key)) e.preventDefault(); };
    const opts = { passive: false, capture: true };
    addEventListener('keydown', block, opts);
    return () => removeEventListener('keydown', block, opts);
  }, [state]);

  useEffect(() => {
    if (state !== 'up') return;
    const t = setTimeout(() => setState('gone'), 1100);
    return () => clearTimeout(t);
  }, [state]);

  if (state === 'gone') return null;
  const up = state === 'up';
  const wrap: CSS = {
    position: 'fixed', inset: 0, zIndex: 200, overflowY: 'scroll', overscrollBehavior: 'contain', scrollbarWidth: 'none', background: '#151515', fontFamily: 'var(--archivo)',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 22,
    transform: up ? 'translateY(-100%)' : 'none',
    transition: 'transform 1s cubic-bezier(.7,0,.2,1)',
  };
  return (
    <div id="loader" data-up={up || undefined} role="status" aria-label="Loading AKSA" style={wrap}>
      <noscript><style>{'#loader{display:none}'}</style></noscript>
      {/* 1px of overflow makes this a real scroll container, so overscroll-behavior can trap wheel/touch */}
      <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, width: 1, height: 'calc(100% + 1px)' }} />
      {/* curtain folds */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(90deg,rgba(0,0,0,.28) 0 2vw,rgba(255,255,255,.04) 3.5vw,rgba(0,0,0,.28) 6vw),linear-gradient(180deg,#5E0F1B,#A51C30 60%,#7A1424)' }} />
      <div aria-hidden style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '30vh', background: 'linear-gradient(180deg,transparent,rgba(21,21,21,.75))' }} />
      {/* spotlight on the curtain */}
      <div aria-hidden style={{ position: 'absolute', left: '50%', top: '50%', width: '90vmin', height: '90vmin', margin: '-45vmin 0 0 -45vmin', borderRadius: '50%', background: 'radial-gradient(closest-side,rgba(244,184,96,.45),rgba(232,168,62,.12) 60%,transparent)', animation: 'ld-spot 2.4s ease-in-out infinite alternate' }} />
      <div style={{ position: 'relative', fontFamily: 'var(--anton)', fontSize: 'clamp(72px,16vw,200px)', lineHeight: 0.85, color: '#FFF8EA', letterSpacing: '.04em', textShadow: '0 5px 0 #151515, 0 0 40px rgba(244,184,96,.4)' }}>AKSA</div>
      <div style={{ position: 'relative', width: 'min(240px,56vw)', height: 2, background: 'rgba(241,232,213,.2)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: '#F4B860', transformOrigin: '0 50%', transform: up ? 'scaleX(1)' : undefined, animation: up ? undefined : 'ld-bar 2.6s cubic-bezier(.2,.6,.3,1) forwards', transition: 'transform .3s ease-out' }} />
      </div>
      <div style={{ position: 'relative', fontSize: 10, fontWeight: 800, letterSpacing: '.3em', color: '#F1E8D5', textAlign: 'center', lineHeight: 1.8, textWrap: 'balance', padding: '0 8vw', animation: 'flick 3s infinite' }}>HOUSE LIGHTS DOWN · PLEASE TAKE YOUR SEATS</div>
    </div>
  );
}
