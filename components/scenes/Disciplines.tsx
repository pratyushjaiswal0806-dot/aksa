import Photo from '@/components/Photo';
import Tape from '@/components/Tape';
import { stripes, type CSS } from '@/lib/css';

const abs: CSS = { position: 'absolute' };
const num = (n: number, c: string, extra?: CSS): CSS => ({ ...abs, left: '4vw', top: '12vh', fontSize: 11, fontWeight: 800, letterSpacing: '.24em', color: c, ...extra });
/** Panel i (1–4) wipes in bottom-up over its fifth of --t. */
const reveal = (i: number) => `inset(calc((1 - min(1,max(0,(var(--t)*5 - ${i})*2.5)))*100%) 0 0 0)`;
const panel = (bg: string, i?: number): CSS => ({ ...abs, inset: 0, overflow: 'hidden', background: bg, ...(i ? { clipPath: reveal(i) } : {}) });
const quote: CSS = { fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(22px,2.4vw,36px)' };
const ring = (c: string, d: string): CSS => ({ ...abs, left: '50%', top: '50%', width: '40vmin', height: '40vmin', borderRadius: '50%', border: `2px solid ${c}`, animation: `ring 3s linear ${d} infinite` });
const frame = (w: string, h: string, c: string, d: string, bg?: string): CSS => ({ ...abs, left: '50%', top: '50%', width: w, height: h, margin: `calc(${h}/-2) 0 0 calc(${w}/-2)`, border: `3px solid ${c}`, animation: `frame 4s ease-in-out ${d} infinite`, background: bg });
const hand: CSS = { ...abs, fontFamily: 'var(--hand)', fontWeight: 700 };
const jit = (r: string, dur: string): CSS => ({ '--r': r, animation: `jit ${dur} ease-in-out infinite`, transform: `rotate(${r})` });

export default function Disciplines() {
  return (
    <section id="disciplines" data-scene data-nav="disciplines" data-act="2" style={{ position: 'relative', height: '620vh' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', background: '#A51C30' }}>

        {/* 01 ACTING */}
        <div style={panel('linear-gradient(120deg,#A51C30,#D4382F 70%,#E8A83E)')}>
          <div className="di-photo" style={{ ...abs, left: '5vw', top: '11vh', width: 'min(42vw,560px)', height: '78vh', border: '10px solid #FFF8EA', boxShadow: '0 20px 50px rgba(0,0,0,.4)', overflow: 'hidden', transform: 'rotate(-2deg)' }}>
            <Photo id="portraitActing" bg="linear-gradient(170deg,#F4B860,#A51C30)" label="PHOTO · PORTRAIT — EXPRESSION CHANGES ×3" labelStyle={{ left: 12, bottom: 10, fontSize: 11, letterSpacing: '.18em', zIndex: 3 }} sizes="42vw" style={{ inset: 0 }} />
            <Photo id="portraitActing2" bg="linear-gradient(170deg,#315CFF,#182A4A)" sizes="42vw" style={{ inset: 0, animation: 'expr 1.8s steps(1) infinite' } as CSS} />
            <Photo id="portraitActing3" bg="linear-gradient(170deg,#151515,#D4382F)" sizes="42vw" style={{ inset: 0, animation: 'expr 1.8s steps(1) .6s infinite' } as CSS} />
          </div>
          <div className="di-acting" style={{ ...abs, left: 'min(52vw,640px)', right: '3vw', top: '10vh', display: 'flex', flexDirection: 'column', gap: '1vh' }}>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.24em', color: '#FFF8EA' }}>01 / 05 — DISCIPLINE</div>
            <div style={{ fontFamily: 'var(--anton)', fontSize: 'clamp(70px,14vw,230px)', lineHeight: 0.88, color: '#FFF8EA', textTransform: 'uppercase' }}>Acting</div>
            <div style={{ ...quote, color: '#FFF8EA', transform: 'translateX(calc(var(--t)*-12vw))' }}>— Say it again.</div>
            <div style={{ ...quote, color: '#151515', transform: 'translateX(calc(var(--t)*14vw))', marginLeft: '6vw' }}>— Not like that. Like you mean it.</div>
            <div style={{ ...quote, color: '#FFF8EA', transform: 'translateX(calc(var(--t)*-16vw))', marginLeft: '2vw' }}>— I do mean it.</div>
          </div>
        </div>

        {/* 02 VOICE */}
        <div style={panel('radial-gradient(ellipse at 50% 50%,#24407A,#182A4A 70%)', 1)}>
          <div aria-hidden style={ring('#F1E8D5', '0s')} /><div aria-hidden style={ring('#315CFF', '1s')} /><div aria-hidden style={ring('#E8A83E', '2s')} />
          <div style={num(2, '#F1E8D5')}>02 / 05 — DISCIPLINE</div>
          <div style={{ ...abs, inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5vw', fontFamily: 'var(--anton)', fontSize: 'clamp(90px,25vw,420px)', lineHeight: 1, color: '#FFF8EA', textShadow: '0 0 40px rgba(49,92,255,.8)' }}>
            {[...'VOICE'].map((ch, i) => (
              <span key={i} style={{ display: 'inline-block', animation: `wave 2.4s ease-in-out ${i * 0.2}s infinite`, color: ch === 'I' ? '#F4B860' : undefined }}>{ch}</span>
            ))}
          </div>
          <div style={{ ...abs, left: '3vw', bottom: '8vh', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(30px,5vw,80px)', color: '#7F9BFF', transform: 'translateX(calc(var(--t)*-6vw))' }}>breathe</div>
          <div style={{ ...abs, right: '3vw', top: '20vh', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(30px,6vw,100px)', color: '#F4B860', transform: 'translateX(calc(var(--t)*8vw))' }}>project</div>
          <div style={{ ...abs, right: '6vw', bottom: '8vh', fontFamily: 'var(--anton)', fontSize: 'clamp(30px,5vw,80px)', color: '#D4382F', textTransform: 'uppercase', letterSpacing: '.1em' }}>to the back row</div>
        </div>

        {/* 03 DIRECTION */}
        <div style={panel('linear-gradient(135deg,#34483D,#1f2d25)', 2)}>
          <div aria-hidden style={frame('84vw', '76vh', '#E8A83E', '0s')} />
          <div aria-hidden style={frame('62vw', '56vh', '#F4B860', '.5s', 'rgba(232,168,62,.1)')} />
          <div aria-hidden style={frame('40vw', '36vh', '#FFF8EA', '1s', '#E8A83E')} />
          <div style={num(3, '#F1E8D5')}>03 / 05 — DISCIPLINE</div>
          <div style={{ ...abs, left: '50%', top: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center', fontFamily: 'var(--anton)', fontSize: 'clamp(40px,9vw,150px)', lineHeight: 0.9, color: '#151515', textTransform: 'uppercase' }}>Direction</div>
          <div className="di-look" style={{ ...abs, left: '50%', top: 'calc(50% + 14vh)', transform: 'translateX(-50%)', fontSize: 11, fontWeight: 800, letterSpacing: '.22em', color: '#151515', whiteSpace: 'nowrap' }}>LOOK HERE. NOW HERE. NOW HERE.</div>
          <div style={{ ...abs, right: '5vw', bottom: '5vh', fontSize: 11, fontWeight: 800, letterSpacing: '.2em', color: '#F4B860' }}>FRAME 1:1.85 · TAKE 03</div>
        </div>

        {/* 04 SCRIPTING */}
        <div style={panel('#F1E8D5', 3)}>
          <div style={{ ...abs, inset: 0, backgroundImage: 'linear-gradient(rgba(24,42,74,.1) 1px,transparent 1px)', backgroundSize: '100% 36px' }} />
          <div style={num(4, '#A51C30')}>04 / 05 — DISCIPLINE</div>
          <div style={{ ...abs, left: '6vw', top: '22vh', fontFamily: 'var(--elite)', fontSize: 'clamp(50px,13vw,220px)', lineHeight: 1, color: '#151515', textTransform: 'uppercase' }}>Scri<s style={{ textDecorationColor: '#D4382F', textDecorationThickness: '.06em' }}>b</s>pting</div>
          <div style={{ ...hand, left: '20vw', top: '12vh', fontSize: 'clamp(26px,3vw,46px)', color: '#D4382F', transform: 'rotate(-5deg)' }}>cut the second line ↓</div>
          <div style={{ ...abs, right: '6vw', top: '42vh', maxWidth: '30vw', fontFamily: 'var(--elite)', fontSize: 'clamp(13px,1.4vw,20px)', lineHeight: 1.6, color: '#151515' }}><span style={{ background: '#F4B860' }}>Every line is a decision.</span> Every pause is a line.</div>
          <div style={{ ...hand, left: '8vw', bottom: '10vh', fontSize: 'clamp(28px,3.4vw,54px)', color: '#315CFF', transform: 'rotate(-3deg) translateX(calc(var(--t)*4vw))' }}>say less. mean more. →</div>
          <div style={{ ...hand, right: '8vw', bottom: '9vh', fontSize: 'clamp(28px,3vw,48px)', color: '#D4382F', transform: 'rotate(4deg)' }}>&quot;actually&quot; ✗ ✗ ✗</div>
          <Tape style={{ left: '46vw', bottom: '14vh', width: 90, height: 26, transform: 'rotate(-8deg)' }} />
        </div>

        {/* 05 IMPROV */}
        <div style={panel('#315CFF', 4)}>
          <div style={{ ...abs, ...jit('-6deg', '3.1s'), left: '-4vw', top: '10vh', width: '36vw', height: '46vh', background: '#D4382F' }} />
          <Photo id="midLaugh" className="di-laugh" bg="linear-gradient(170deg,#F4B860,#A51C30)" label="PHOTO · MID-LAUGH" sizes="30vw" stripe={stripes(135, 0.1)}
            style={{ ...jit('5deg', '2.3s'), right: '4vw', top: '6vh', width: '30vw', height: '40vh', border: '8px solid #FFF8EA' }} />
          <div style={{ ...abs, ...jit('-3deg', '2.7s'), left: '30vw', bottom: '-6vh', width: '40vw', height: '34vh', background: '#151515' }} />
          <div style={num(5, '#FFF8EA', { top: '6vh' })}>05 / 05 — DISCIPLINE</div>
          <div style={{ ...abs, ...jit('-4deg', '3.6s'), left: '5vw', top: '28vh', fontFamily: 'var(--anton)', fontSize: 'clamp(50px,13vw,220px)', lineHeight: 0.9, color: '#FFF8EA', textTransform: 'uppercase' }}>Impro</div>
          <div style={{ ...abs, ...jit('3deg', '2.9s'), left: '24vw', top: '52vh', fontFamily: 'var(--anton)', fontSize: 'clamp(50px,13vw,220px)', lineHeight: 0.9, color: '#D4382F', textTransform: 'uppercase', WebkitTextStroke: '2px #FFF8EA' }}>visation</div>
          <div style={{ ...abs, right: '5vw', bottom: '8vh', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(28px,4vw,64px)', color: '#FFF8EA' }}>Yes, and —</div>
        </div>
      </div>
    </section>
  );
}
