import Photo from '@/components/Photo';
import type { PhotoKey } from '@/lib/photos';
import type { CSS } from '@/lib/css';

const abs: CSS = { position: 'absolute' };
const pal = [
  { stage: 'radial-gradient(ellipse at 70% 50%,#F4B860,#E8A83E)', bg: 'linear-gradient(160deg,#F1E8D5,#E8A83E)', img: 'linear-gradient(160deg,#315CFF,#182A4A)', ink: '#151515', title: '75% Attendance', year: 'FAREWELL 21', meta: 'STAGE PLAY' },
  { stage: 'radial-gradient(ellipse at 40% 60%,#34483D,#151515)', bg: 'linear-gradient(160deg,#34483D,#151515)', img: 'linear-gradient(160deg,#E8A83E,#34483D)', ink: '#F4B860', title: 'The Family Business', year: 'SAMBHRAM 25', meta: 'STAGE PLAY' },
  { stage: 'radial-gradient(ellipse at 50% 40%,#315CFF,#182A4A)', bg: 'linear-gradient(160deg,#315CFF,#182A4A)', img: 'linear-gradient(160deg,#F4B860,#D4382F)', ink: '#FFF8EA', title: '1095 Nights', year: 'AIFF 2026 NOMINEE', meta: 'FILM · ARIJEET & ROHAN' },
  { stage: 'radial-gradient(ellipse at 30% 50%,#D4382F,#4a0f1a)', bg: 'linear-gradient(160deg,#A51C30,#3a0a14)', img: 'linear-gradient(160deg,#F4B860,#A51C30)', ink: '#FFF8EA', title: 'Redemption', year: '23 APRIL · SAMBHRAM', meta: 'FILM · ARIJEET & ROHAN' },
];
/** last poster index: --t runs the wall from poster 0 to poster LAST */
const LAST = pal.length - 1;
/** distance of poster i from the active slot (0 = centred) */
const dist = (i: number) => `max(var(--t)*${LAST} - ${i},${i} - var(--t)*${LAST})`;

export default function Posters() {
  return (
    <section id="productions" data-scene data-nav="productions" data-act="2" style={{ position: 'relative', height: `${100 + LAST * 105}vh` }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', background: '#151515' }}>
        {pal.map((p, i) => <div key={i} aria-hidden style={{ ...abs, inset: 0, background: p.stage, opacity: `calc(1 - min(1,${dist(i)}))` as unknown as number }} />)}
        <div style={{ ...abs, left: '3vw', top: 62, zIndex: 3, fontSize: 11, fontWeight: 800, letterSpacing: '.22em', color: '#FFF8EA', mixBlendMode: 'difference' }}>08 — PRODUCTIONS · THE POSTER WALL</div>
        <div style={{ ...abs, left: 0, top: 0, bottom: 0, display: 'flex', alignItems: 'center', gap: '4vw', paddingLeft: 'calc(20vw - var(--m)*10vw)', transform: `translateX(calc(var(--t)*-${LAST}*(64vw + var(--m)*20vw)))` }}>
          {pal.map((p, i) => (
            <div key={i} data-spot style={{ flex: 'none', width: 'calc(60vw + var(--m)*20vw)', height: '76vh', transform: `scale(calc(1 - min(.2,${dist(i)}*.2)))`, perspective: 1200 }}>
              <div style={{ position: 'relative', width: '100%', height: '100%', background: p.bg, border: '6px solid color-mix(in srgb,#FFF8EA calc(60% + var(--hv,0)*40%),transparent)', boxShadow: '0 30px 60px rgba(0,0,0,.5)', overflow: 'hidden', transform: 'rotateY(calc(var(--nx,0)*5deg)) rotateX(calc(var(--ny,0)*-4deg))', transition: 'transform .15s' }}>
                <div style={{ ...abs, inset: '-4%', background: 'repeating-linear-gradient(135deg,rgba(255,255,255,.07) 0 12px,transparent 12px 24px)', transform: 'translate(calc(var(--nx,0)*-5px),calc(var(--ny,0)*-4px))' }} />
                <Photo id={`poster${i + 1}` as PhotoKey} bg={p.img} label="PRODUCTION PHOTO" stripe="repeating-linear-gradient(45deg,rgba(255,255,255,.12) 0 8px,transparent 8px 16px)" sizes="(max-width:760px) 40vw, 24vw"
                  labelStyle={{ left: 6, bottom: 4, letterSpacing: '.14em' }}
                  style={{ right: '5%', top: '8%', width: '38%', height: '48%', border: '6px solid #FFF8EA', transform: 'rotate(4deg) translate(calc(var(--nx,0)*4px),calc(var(--ny,0)*3px))' }} />
                <div style={{ ...abs, left: '5%', top: '5%', fontSize: 11, fontWeight: 800, letterSpacing: '.22em', color: p.ink }}>POSTER 0{i + 1}</div>
                <div style={{ ...abs, left: '4%', bottom: '12%', maxWidth: '92%', fontFamily: 'var(--anton)', fontSize: 'clamp(46px,9vw,150px)', lineHeight: 0.88, textTransform: 'uppercase', color: p.ink }}>{p.title}</div>
                <div style={{ ...abs, left: '5%', bottom: '5%', right: '5%', display: 'flex', justifyContent: 'space-between', fontSize: 11, fontWeight: 800, letterSpacing: '.2em', color: p.ink }}><span>{p.year}</span><span style={{ opacity: 'var(--hv,0)' as unknown as number, transition: 'opacity .25s' }}>{p.meta}</span></div>
                <span aria-hidden style={{ ...abs, left: '10%', top: -12, width: 100, height: 28, background: 'rgba(232,168,62,.9)', transform: 'rotate(-4deg)' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
