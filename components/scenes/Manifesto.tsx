import Photo from '@/components/Photo';
import type { CSS } from '@/lib/css';

const abs: CSS = { position: 'absolute' };
const anton: CSS = { fontFamily: 'var(--anton)', whiteSpace: 'nowrap' };

export default function Manifesto() {
  return (
    <section data-scene data-nav="about" data-act="1" style={{ position: 'relative', height: '330vh', background: '#FFF8EA' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', background: '#FFF8EA' }}>
        <div style={{ ...abs, inset: '-10%', background: 'repeating-linear-gradient(100deg,rgba(165,28,48,.10) 0 40px,rgba(24,42,74,.10) 40px 90px),linear-gradient(180deg,rgba(232,168,62,.25),rgba(165,28,48,.12))', transform: 'translateX(calc(var(--t)*-8vw)) scale(1.1)', mixBlendMode: 'multiply' }} />
        <Photo id="faceCloseup" className="mf-photo" bg="linear-gradient(170deg,#D4382F,#182A4A)" label="PHOTO · FACE CLOSE-UP" stripe="repeating-linear-gradient(135deg,rgba(255,255,255,.12) 0 8px,transparent 8px 16px)" sizes="22vw"
          style={{ right: '4vw', top: '12vh', width: '22vw', height: '30vw', transform: 'rotate(calc(5deg + var(--t)*18deg)) translateY(calc(var(--t)*-20vh))', border: '8px solid #FFF8EA', boxShadow: '0 14px 30px rgba(0,0,0,.3)' }} />
        <div style={{ ...abs, left: '3vw', top: 60, fontSize: 11, fontWeight: 800, letterSpacing: '.22em' }}>03 — MANIFESTO · POSTER NO. 1</div>

        <div style={{ ...abs, left: 0, right: 0, top: '50%', transform: 'translateY(calc(-50% + var(--b)*-26vh))', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '4vw' }}>
          <div style={{ ...anton, fontSize: 'clamp(60px,15vw,260px)', lineHeight: 0.9, color: '#151515', textTransform: 'uppercase' }}>We don&apos;t just</div>
        </div>
        <div className="mf-perform" style={{ ...abs, ...anton, left: 0, top: '50%', marginTop: 'calc(-.5*clamp(120px,32vw,560px) + 6vh)', fontSize: 'clamp(120px,32vw,560px)', lineHeight: 1, color: '#D4382F', textShadow: '8px 8px 0 rgba(24,42,74,.25)', transform: 'translateX(calc(100vw*(1 - var(--a)) - 135vw*var(--b))) skewX(calc(-8deg*(1 - var(--b))))' }}>PERFORM.</div>
        <div className="mf-become" style={{ ...abs, ...anton, left: '4vw', right: '4vw', top: '50%', marginTop: '-3vw', fontSize: 'clamp(70px,19vw,330px)', lineHeight: 0.9, color: '#315CFF', textTransform: 'uppercase', clipPath: 'inset(-10% calc((1 - var(--b))*100%) -10% 0)', transform: 'scale(calc(.5 + var(--b)*.5)) translateX(calc((1 - var(--b))*30vw))', transformOrigin: '0 50%', textShadow: '5px 5px 0 #F4B860' }}>We become.</div>
        <div style={{ ...abs, left: '3vw', bottom: '5vh', fontSize: 11, fontWeight: 800, letterSpacing: '.22em' }}>PERFORMANCE 2026 · STAGE RIGHT →</div>
      </div>
    </section>
  );
}
