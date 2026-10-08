import Photo from '@/components/Photo';
import type { CSS } from '@/lib/css';

const abs: CSS = { position: 'absolute' };
const big: CSS = { ...abs, left: 0, fontFamily: 'var(--anton)', fontSize: 'clamp(60px,13vw,230px)', lineHeight: 0.92, textTransform: 'uppercase', whiteSpace: 'nowrap' };

export default function FullBleed() {
  return (
    <section data-scene data-nav="productions" data-act="3" style={{ position: 'relative', height: '140vh', overflow: 'hidden', background: '#A51C30' }}>
      <Photo id="fullBleed" bg="radial-gradient(ellipse 50% 50% at 50% 40%,#F4B860,#D4382F 50%,#2a0d12)" stripe="repeating-linear-gradient(135deg,rgba(255,255,255,.05) 0 14px,transparent 14px 28px)" sizes="100vw"
        style={{ left: 0, right: 0, top: '-20vh', bottom: '-20vh', transform: 'translateY(calc(var(--p)*18vh)) scale(1.08)' }} />
      <div aria-hidden style={{ ...abs, inset: 0, background: 'radial-gradient(ellipse 80% 80% at 50% 50%,transparent 40%,rgba(21,21,21,.55))' }} />
      <div className="fb-cap" style={{ ...abs, left: '50%', top: '30vh', transform: 'translateX(-50%)', border: '1px solid #FFF8EA', padding: '6px 12px', fontSize: 11, fontWeight: 800, letterSpacing: '.22em', color: '#FFF8EA', whiteSpace: 'nowrap' }}>FULL-BLEED PHOTO PLACEHOLDER · WARM REHEARSAL · 3:2</div>
      <div style={{ ...abs, left: '4vw', top: 62, fontSize: 11, fontWeight: 800, letterSpacing: '.22em', color: '#FFF8EA' }}>10 — REHEARSAL, 22:14 · WARM GRADE</div>
      <div className="fb-a" style={{ ...big, top: '44vh', color: '#FFF8EA', transform: 'translateX(calc(var(--p)*-26vw + 4vw))', textShadow: '4px 4px 0 rgba(21,21,21,.4)' }}>That moment before</div>
      <div className="fb-b" style={{ ...big, top: 'calc(44vh + clamp(60px,13vw,230px)*.92)', color: '#151515', transform: 'translateX(calc(var(--p)*22vw + 14vw))' }}>the curtain rises.</div>
      <div style={{ ...abs, right: '4vw', bottom: '5vh', fontSize: 11, fontWeight: 800, letterSpacing: '.2em', color: '#FFF8EA' }}>PHOTO: AKSA ARCHIVE · LIGHTING: TUNGSTEN</div>
    </section>
  );
}
