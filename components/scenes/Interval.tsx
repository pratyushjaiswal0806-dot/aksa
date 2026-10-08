import type { CSS } from '@/lib/css';

const abs: CSS = { position: 'absolute' };

export default function Interval() {
  return (
    <section data-scene data-nav="people" data-act="4" style={{ position: 'relative', background: '#FFF8EA', overflow: 'hidden', padding: '18vh 6vw 16vh' }}>
      <div aria-hidden style={{ ...abs, right: '-10vw', top: '-10vh', width: '60vw', height: '60vw', borderRadius: '50%', background: 'radial-gradient(closest-side,rgba(244,184,96,.65),transparent)', transform: 'translateY(calc(var(--p)*10vh))' }} />
      <div className="interval-grid" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.3fr)', gap: '6vw', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, borderTop: '2px solid #151515', paddingTop: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.24em', color: '#A51C30' }}>12 — DIRECTOR&apos;S NOTE · INTERVAL</div>
          <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.2em', lineHeight: 2.2 }}>ACT I — DISCIPLINES<br />ACT II — PRODUCTIONS<br />ACT III — PEOPLE<br />FINALE — JOIN</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3vh' }}>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(34px,5.4vw,88px)', lineHeight: 1, color: '#151515', transform: 'translateY(calc(var(--p)*-4vh))' }}>Theatre is the one place where being <span style={{ color: '#D4382F', fontStyle: 'italic' }}>unfinished</span> is allowed.</div>
          <div style={{ fontFamily: 'var(--hand)', fontWeight: 700, fontSize: 28, color: '#315CFF' }}>— placeholder note, to be replaced by the director</div>
        </div>
      </div>
    </section>
  );
}
