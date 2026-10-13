import type { CSS } from '@/lib/css';

const abs: CSS = { position: 'absolute' };
const W = 'min(54vw,620px)';
const cell = (mt?: string): CSS => ({ marginTop: mt, textAlign: 'center' });

export default function Script() {
  return (
    <section data-scene data-nav="about" data-act="1" style={{ position: 'relative', height: '300vh', background: '#D4382F' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', background: 'radial-gradient(ellipse 70% 70% at 50% 50%,#D4382F,#A51C30)' }}>
        <div style={{ ...abs, left: 0, right: 0, bottom: '5vh', textAlign: 'center', fontSize: 12, fontWeight: 800, letterSpacing: '.26em', color: '#FFF8EA' }}>SCENE 04 — FIVE WAYS IN ↓</div>
        <div className="sc-page" style={{ ...abs, left: '50%', top: '50%', width: W, minWidth: 300, height: '78vh', marginLeft: `calc(-.5*${W})`, marginTop: '-39vh', transformOrigin: '50% 62%', transform: 'translateY(calc(max(0,var(--t) - .74)*-420vh)) scale(calc(1 + var(--t)*3.4)) rotate(calc(-2deg + var(--t)*2deg))' }}>
          <div style={{ ...abs, inset: 0, background: '#F1E8D5', boxShadow: '0 30px 60px rgba(0,0,0,.45)', padding: '5% 8%', fontFamily: 'var(--elite)', fontSize: 'clamp(10px,1.15vw,16px)', lineHeight: 1.8, color: '#151515', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.8em', letterSpacing: '.14em' }}><span>AKSA — A PLAY IN ONE ROOM</span><span>14.</span></div>
            <div style={{ marginTop: '3%', fontWeight: 'bold' }}>INT. REHEARSAL ROOM — NIGHT</div>
            <div>A dozen strangers hold scripts they have not <s style={{ textDecorationColor: '#D4382F', textDecorationThickness: 2 }}>memorised</s> <span style={{ fontFamily: 'var(--hand)', color: '#D4382F', fontSize: '1.6em' }}>loved</span>.</div>
            <div style={cell('2%')}>DIRECTOR</div><div style={cell()}>Again.</div>
            <div style={cell('2%')}>ACTOR</div><div style={cell()}>From where?</div>
            <div style={cell('2%')}>DIRECTOR</div><div style={cell()}><span style={{ background: '#F4B860', padding: '0 4px' }}>From the beginning.</span></div>
            <div style={{ marginTop: '3%', fontStyle: 'italic', textDecoration: 'underline wavy #315CFF' }}>(Silence. Someone laughs. The lights come up.)</div>
            <div style={{ marginTop: '4%', fontFamily: 'var(--anton)', fontSize: '4.6em', lineHeight: 0.9, textTransform: 'uppercase', color: '#151515' }}>Five ways in.</div>
            <span style={{ ...abs, right: '6%', top: '30%', fontFamily: 'var(--hand)', fontSize: '2em', color: '#D4382F', transform: 'rotate(-8deg)' }}>← pause here</span>
            <span style={{ ...abs, left: '6%', bottom: '6%', fontFamily: 'var(--hand)', fontSize: '1.8em', color: '#315CFF', transform: 'rotate(-3deg)' }}>breathe!!</span>
            <span aria-hidden style={{ ...abs, right: -30, bottom: '12%', width: 130, height: 130, borderRadius: '50%', border: '10px solid rgba(110,70,30,.25)', filter: 'blur(1px)' }} />
          </div>
          <span aria-hidden style={{ ...abs, left: -18, top: '6%', width: 90, height: 26, background: 'rgba(232,168,62,.9)', transform: 'rotate(-30deg)' }} />
          <span aria-hidden style={{ ...abs, right: -16, top: '3%', width: 80, height: 26, background: 'rgba(244,184,96,.9)', transform: 'rotate(38deg)' }} />
        </div>
      </div>
    </section>
  );
}
