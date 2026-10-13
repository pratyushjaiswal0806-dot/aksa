import Photo from '@/components/Photo';
import Tape from '@/components/Tape';
import { stripes, type CSS } from '@/lib/css';

const abs: CSS = { position: 'absolute' };
const hand: CSS = { fontFamily: 'var(--hand)', fontWeight: 700 };
const lbl: CSS = { fontSize: 10, fontWeight: 800, letterSpacing: '.16em' };
const y = (k: number) => `translateY(calc(var(--p)*${k}vh))`;

export default function About() {
  return (
    <section id="about" data-scene data-nav="about" data-act="1" style={{ position: 'relative', zIndex: 1, height: '190vh', marginTop: '-100vh', background: '#F1E8D5', overflow: 'hidden', boxShadow: '0 -24px 60px rgba(0,0,0,.55)' }}>
      <div style={{ ...abs, inset: 0, background: 'radial-gradient(ellipse 50% 40% at 85% 10%,rgba(244,184,96,.5),transparent 70%),radial-gradient(ellipse 40% 50% at 0% 100%,rgba(49,92,255,.12),transparent 70%)' }} />
      <div style={{ ...abs, inset: 0, backgroundImage: 'linear-gradient(rgba(24,42,74,.08) 1px,transparent 1px)', backgroundSize: '100% 34px', transform: y(-8) }} />

      <Photo id="blueRehearsal" className="ab-p1" bg="linear-gradient(160deg,#315CFF,#182A4A)" label="PHOTO · BLUE LIGHT REHEARSAL" sizes="30vw"
        style={{ left: '-4vw', top: '6vh', width: '30vw', height: '21vw', transform: `${y(-34)} rotate(-5deg)`, boxShadow: '0 14px 30px rgba(0,0,0,.3)', border: '8px solid #FFF8EA' }}>
        <Tape style={{ left: '40%', top: -22, width: 90, height: 30, transform: 'rotate(4deg)' }} />
      </Photo>
      <Photo id="handsScript" className="ab-p2" bg="linear-gradient(180deg,#E8A83E,#A51C30)" label="PHOTO · HANDS + SCRIPT" sizes="24vw" stripe={stripes(45, 0.1)}
        style={{ right: '5vw', top: '48vh', width: '24vw', height: '30vw', transform: `${y(-52)} rotate(4deg)`, boxShadow: '0 18px 34px rgba(0,0,0,.35)', border: '8px solid #FFF8EA' }}>
        <Tape style={{ right: 20, top: -16, width: 80, height: 28, transform: 'rotate(-8deg)' }} />
      </Photo>

      <div className="ab-sched" style={{ ...abs, left: '62vw', top: '12vh', width: '22vw', padding: '16px 18px', background: '#FFF8EA', boxShadow: '0 8px 20px rgba(0,0,0,.2)', transform: `${y(-22)} rotate(3deg)`, fontFamily: 'var(--elite)', fontSize: 13, lineHeight: 1.7 }}>
        <b style={{ letterSpacing: '.14em' }}>REHEARSAL SCHEDULE</b><br />17:00 warm-up<br />17:30 blocking<br />
        <s style={{ textDecorationColor: '#D4382F', textDecorationThickness: 2 }}>18:30 break</s>{' '}
        <span style={{ fontFamily: 'var(--hand)', color: '#D4382F', fontSize: 20 }}>no break!</span><br />19:00 run Act I<br />
        <span style={{ background: '#F4B860' }}>22:14 take again</span>
        <span aria-hidden style={{ ...abs, left: '46%', top: -12, width: 70, height: 24, background: 'rgba(232,168,62,.9)' }} />
      </div>

      <div className="ab-diag" style={{ ...abs, left: '8vw', top: '92vh', width: '28vw', height: '18vw', border: '2px solid #182A4A', background: 'rgba(255,248,234,.6)', transform: `${y(-40)} rotate(-2deg)` }}>
        <span style={{ ...abs, ...lbl, left: 8, top: 6, color: '#182A4A' }}>STAGE LEFT</span>
        <span style={{ ...abs, ...lbl, right: 8, top: 6, color: '#182A4A' }}>STAGE RIGHT</span>
        <span style={{ ...abs, left: '46%', top: '44%', fontFamily: 'var(--hand)', fontSize: 34, color: '#315CFF' }}>✕ you</span>
        <span style={{ ...abs, left: '12%', bottom: '12%', fontFamily: 'var(--hand)', fontSize: 22, color: '#315CFF' }}>door →</span>
      </div>

      <div className="ab-louder" style={{ ...abs, ...hand, left: '44vw', top: '22vh', fontSize: 'clamp(26px,3vw,44px)', color: '#315CFF', transform: `${y(-60)} rotate(-6deg)` }}>louder — then quieter ↘</div>
      <div className="ab-keep" style={{ ...abs, ...hand, left: '3vw', top: '62vh', fontSize: 'clamp(26px,3vw,40px)', color: '#D4382F', transform: `${y(-70)} rotate(5deg)` }}>keep this one!</div>

      <Photo id="wings" className="ab-wings" bg="linear-gradient(120deg,#34483D,#151515)" label="PHOTO · WINGS" sizes="26vw"
        style={{ right: '-6vw', top: '118vh', width: '26vw', height: '18vw', transform: `${y(-80)} rotate(-7deg)`, border: '6px solid #FFF8EA', boxShadow: '0 10px 24px rgba(0,0,0,.3)' }} />
      <Tape style={{ left: '36vw', top: '130vh', width: 130, height: 30, transform: `${y(-90)} rotate(-12deg)` }} />

      <div className="ab-text" style={{ ...abs, left: 0, right: 0, top: '44vh', padding: '0 8vw', display: 'flex', flexDirection: 'column', gap: '3vh', transform: y(-14) }}>
        <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.24em', color: '#A51C30' }}>02 — BACKSTAGE · DIRECTOR&apos;S NOTE</div>
        <h2 style={{ margin: 0, maxWidth: '11ch', fontFamily: 'var(--anton)', fontWeight: 400, fontSize: 'clamp(64px,12vw,200px)', lineHeight: 0.88, textTransform: 'uppercase', color: '#151515', textShadow: '3px 3px 0 #F1E8D5,6px 6px 0 rgba(212,56,47,.35)' }}>Before the first word, the room.</h2>
        <p style={{ margin: 0, maxWidth: '34ch', fontFamily: 'var(--serif)', fontSize: 'clamp(24px,2.6vw,38px)', lineHeight: 1.15, background: 'rgba(255,248,234,.85)', padding: '10px 14px', alignSelf: 'flex-start' }}>AKSA is a student theatre collective. We rehearse late, argue about commas, and make things that only exist once.</p>
      </div>
    </section>
  );
}
