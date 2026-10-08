'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { CSS } from '@/lib/css';

const LINKS = [
  ['about', 'About', '#E8A83E'], ['disciplines', 'Disciplines', '#315CFF'], ['productions', 'Productions', '#D4382F'],
  ['people', 'People', '#FFF8EA'], ['join', 'Join', '#F4B860'],
] as const;

/** Phone-only nav: a MENU button + full-screen link sheet. Hidden ≥760px via CSS (.m-only). */
export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    addEventListener('keydown', esc);
    return () => { removeEventListener('keydown', esc); document.documentElement.style.overflow = ''; };
  }, [open]);

  return (
    <div className="m-only">
      <button
        type="button" aria-expanded={open} aria-controls="m-sheet" onClick={() => setOpen(o => !o)}
        style={{ background: 'none', border: 0, padding: '14px 0 14px 14px', color: '#F1E8D5', font: '600 11px var(--archivo)', letterSpacing: '.22em', cursor: 'pointer' }}
      >{open ? 'CLOSE ✕' : 'MENU ≡'}</button>
      {mounted && createPortal(
        <div
        id="m-sheet" className="m-only" aria-hidden={!open}
        style={{
          position: 'fixed', left: 0, right: 0, top: 46, bottom: 0, zIndex: 79, background: 'rgba(21,21,21,.97)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2.2vh', padding: '0 8vw',
          opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none', transition: 'opacity .3s', visibility: open ? 'visible' : 'hidden',
        }}
      >
        {LINKS.map(([k, label, c], i) => (
          <a key={k} href={`#${k}`} onClick={() => setOpen(false)} className="hl"
            style={{ '--c0': '#F1E8D5', '--c1': c, color: 'var(--c)', fontFamily: 'var(--anton)', fontSize: 'clamp(44px,15vw,72px)', lineHeight: 1, textTransform: 'uppercase', letterSpacing: '.02em', borderBottom: `2px solid ${c}`, paddingBottom: 6, transform: open ? 'none' : 'translateY(14px)', transition: `transform .4s ${i * 0.05}s` } as CSS}>
            {label}
          </a>
        ))}
      </div>,
        document.body)}
    </div>
  );
}
