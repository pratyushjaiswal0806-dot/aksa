import Photo from '@/components/Photo';
import type { PhotoKey } from '@/lib/photos';
import type { CSS } from '@/lib/css';

const abs: CSS = { position: 'absolute' };
const scan = 'repeating-linear-gradient(0deg,rgba(0,0,0,.25) 0 2px,transparent 2px 5px)';
const wipe = (off: string) => `inset(0 0 calc((1 - min(1,max(0,${off})))*100%) 0)`;
const frags: { id: PhotoKey; style: CSS; bg: string; label: string; ink?: string; off: string }[] = [
  { id: 'fragment1', bg: 'linear-gradient(160deg,#D4382F,#151515)', label: 'FRAGMENT 01 · PHOTO', off: 'var(--t)*6', style: { left: '5vw', top: '16vh', width: '24vw', height: '30vh', border: '2px solid #D4382F', transform: 'rotate(-3deg)' } },
  { id: 'fragment2', bg: 'linear-gradient(200deg,#A51C30,#151515)', label: 'FRAGMENT 02 · PHOTO', off: '(var(--t) - .1)*6', style: { right: '6vw', top: '14vh', width: '20vw', height: '36vh', border: '2px solid #F1E8D5', transform: 'rotate(4deg)' } },
  { id: 'fragment3', bg: 'linear-gradient(120deg,#E8A83E,#A51C30)', label: 'FRAGMENT 03', ink: '#151515', off: '(var(--t) - .2)*6', style: { left: '34vw', top: '10vh', width: '16vw', height: '22vh', transform: 'rotate(2deg)' } },
];

export default function Redemption() {
  return (
    <section data-scene data-nav="productions" data-act="3" style={{ position: 'relative', height: '280vh', background: '#151515' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', containerType: 'inline-size', background: 'radial-gradient(ellipse 70% 60% at 50% 100%,rgba(165,28,48,.7),transparent 70%),#151515' }}>
        <div aria-hidden style={{ ...abs, top: 0, bottom: 0, left: 0, width: '6vw', background: 'linear-gradient(90deg,transparent,rgba(212,56,47,.85),transparent)', boxShadow: '0 0 60px 20px rgba(212,56,47,.5)', animation: 'scan 4.5s linear infinite' }} />
        <div className="rd-label" style={{ ...abs, left: '3vw', top: 62, fontSize: 11, fontWeight: 800, letterSpacing: '.22em', color: '#D4382F' }}>09 — PRODUCTION FILE D-07 · ARCHIVE EDITION</div>
        {frags.map(f => (
          <Photo key={f.id} id={f.id} className={`rd-f rd-${f.id}`} bg={f.bg} label={f.label} stripe={scan} sizes="24vw" labelStyle={f.ink ? { color: f.ink } : undefined}
            style={{ ...f.style, clipPath: wipe(f.off) }} />
        ))}
        <div className="rd-exhibit" style={{ ...abs, left: '8vw', bottom: '36vh', fontFamily: 'var(--elite)', fontSize: 13, lineHeight: 1.7, color: '#F1E8D5', border: '1px solid #D4382F', padding: '8px 12px', transform: 'translateY(calc(var(--t)*-8vh))' }}>EXHIBIT 07 / REEL 3<br />CLASSIFIED: REHEARSAL<br />STAMP: AKSA ARCHIVE</div>
        <div className="rd-stamp" style={{ ...abs, right: '5vw', bottom: '34vh', fontSize: 11, fontWeight: 800, letterSpacing: '.2em', color: '#D4382F', border: '2px solid #D4382F', padding: '6px 10px', transform: 'rotate(-6deg)' }}>23 APRIL · SAMBHRAM</div>
        <div className="rd-title" style={{ ...abs, left: 0, right: 0, bottom: '8vh', textAlign: 'center', fontFamily: 'var(--anton)', fontSize: 'clamp(60px,19vw,330px)', lineHeight: 0.9, color: '#D4382F', textTransform: 'uppercase', clipPath: 'inset(0 calc((1 - min(1,max(0,(var(--t) - .35)*2.2)))*100%) 0 0)', transform: 'scale(calc(.85 + var(--t)*.15))', textShadow: '0 0 50px rgba(212,56,47,.55)' }}>Redemption</div>
        <div className="rd-foot" style={{ ...abs, left: 0, right: 0, bottom: '3vh', display: 'flex', justifyContent: 'center', gap: 30, alignItems: 'center' }}>
          <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.22em', color: '#F1E8D5' }}>A FILM BY ARIJEET &amp; ROHAN</span>
          <a href="#productions" className="hl" style={{ '--c0': '#F1E8D5', '--c1': '#D4382F', color: 'var(--c)', fontSize: 12, fontWeight: 800, letterSpacing: '.22em', borderBottom: '1px solid #D4382F', paddingBottom: 3 } as CSS}>VIEW ARCHIVE →</a>
        </div>
      </div>
    </section>
  );
}
