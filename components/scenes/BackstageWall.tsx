import Photo from '@/components/Photo';
import Tape from '@/components/Tape';
import { stripes, type CSS } from '@/lib/css';

const abs: CSS = { position: 'absolute' };
const y = (k: number) => `translateY(calc(var(--p)*${k}vh))`;
const hand: CSS = { ...abs, fontFamily: 'var(--hand)', fontWeight: 700 };

export default function BackstageWall() {
  return (
    <section data-scene data-nav="productions" data-act="2" style={{ position: 'relative', height: '190vh', background: '#34483D', overflow: 'hidden' }}>
      <div style={{ ...abs, inset: 0, background: 'radial-gradient(ellipse 40% 36% at 78% 8%,rgba(244,184,96,.65),transparent 70%),repeating-linear-gradient(90deg,rgba(0,0,0,.08) 0 3px,transparent 3px 60px)' }} />
      <div style={{ ...abs, left: '5vw', top: 54, fontSize: 11, fontWeight: 800, letterSpacing: '.22em', color: '#F4B860' }}>07 — BACKSTAGE WALL · STAGE LEFT</div>
      <div style={{ ...abs, left: '5vw', top: '16vh', fontFamily: 'var(--anton)', fontSize: 'clamp(70px,15vw,260px)', lineHeight: 0.88, textTransform: 'uppercase', color: '#F1E8D5', transform: y(-14), textShadow: '5px 5px 0 #151515' }}>Controlled<br /><span style={{ color: '#E8A83E' }}>chaos.</span></div>
      <div className="bw-cue" style={{ ...abs, left: '7vw', top: '88vh', width: '24vw', padding: '14px 16px 20px', background: '#F1E8D5', clipPath: 'polygon(0 3%,8% 0,20% 3%,40% 0,60% 2%,80% 0,100% 3%,100% 100%,0 100%)', transform: `${y(-34)} rotate(-3deg)`, fontFamily: 'var(--elite)', fontSize: 13, lineHeight: 1.7 }}>
        <b>ACT II · CUE SHEET</b><br />Q12 lights down<br /><s style={{ textDecorationColor: '#D4382F', textDecorationThickness: 2 }}>Q13 thunder</s> <span style={{ fontFamily: 'var(--hand)', color: '#315CFF', fontSize: 20 }}>too much</span><br />Q14 blackout · 20:41
      </div>
      <Photo id="dressingRoom" className="bw-dress" bg="linear-gradient(150deg,#E8A83E,#A51C30)" label="PHOTO · DRESSING ROOM" sizes="26vw" labelStyle={{ letterSpacing: '.14em' }}
        style={{ left: '36vw', top: '70vh', width: '26vw', height: '19vw', border: '7px solid #FFF8EA', transform: `${y(-48)} rotate(3deg)`, boxShadow: '0 14px 30px rgba(0,0,0,.45)' }}>
        <span aria-hidden style={{ ...abs, left: '44%', top: -14, width: 12, height: 12, borderRadius: '50%', background: '#151515' }} />
      </Photo>
      <Photo id="costumeFragment" className="bw-cost" bg="linear-gradient(180deg,#315CFF,#182A4A)" label="PHOTO · COSTUME FRAGMENT" sizes="22vw" stripe={stripes(45, 0.1)} labelStyle={{ letterSpacing: '.14em' }}
        style={{ right: '4vw', top: '92vh', width: '22vw', height: '28vw', border: '7px solid #FFF8EA', transform: `${y(-66)} rotate(-4deg)`, boxShadow: '0 14px 30px rgba(0,0,0,.45)' }}>
        <Tape style={{ right: 16, top: -14, width: 80, height: 26, background: 'rgba(212,56,47,.9)', transform: 'rotate(10deg)' }} />
      </Photo>
      <div className="bw-shoe" style={{ ...hand, left: '46vw', top: '30vh', fontSize: 'clamp(30px,3.6vw,56px)', color: '#9DB5FF', transform: `${y(-44)} rotate(-5deg)` }}>where is the other shoe?!</div>
      <div style={{ ...hand, left: '12vw', top: '60vh', fontSize: 'clamp(28px,3vw,46px)', color: '#F4B860', transform: `${y(-58)} rotate(4deg)`, textDecoration: 'underline wavy #D4382F' }}>5 MIN TO STAGE</div>
      <div className="bw-arrow" style={{ ...hand, left: '62vw', top: '122vh', fontSize: 70, color: '#D4382F', transform: `${y(-80)} rotate(-12deg)` }}>↖</div>
      <div style={{ ...abs, left: '55vw', top: '56vh', fontSize: 11, fontWeight: 800, letterSpacing: '.2em', color: '#151515', background: '#F1E8D5', padding: '4px 8px', transform: y(-30) }}>19:58:03</div>
      <Tape className="bw-tape" style={{ left: '28vw', top: '132vh', width: 150, height: 30, background: 'rgba(232,168,62,.95)', transform: `${y(-72)} rotate(-8deg)` }} />
      <div className="bw-note" style={{ ...abs, left: '3vw', top: '150vh', maxWidth: '40ch', fontFamily: 'var(--serif)', fontSize: 'clamp(24px,2.6vw,40px)', lineHeight: 1.15, color: '#F1E8D5', transform: y(-30) }}>Nothing here is random. Every scrap on this wall is a promise someone made to the show.</div>
    </section>
  );
}
