import type { CSS } from '@/lib/css';
import SocialLinks from '@/components/SocialLinks';

const dust = Array.from({ length: 26 }, (_, i) => ({
  x: `${(i * 37) % 100}%`, y: `${40 + ((i * 53) % 60)}%`,
  s: `${2 + (i % 4)}px`, t: `${6 + (i % 7)}s`, dl: `${-(i % 9)}s`,
}));

const abs: CSS = { position: 'absolute' };
const arch = (l: string, top: string, a: number): CSS => ({
  ...abs, left: l, right: l, top, bottom: 0, border: `1px solid rgba(241,232,213,${a})`,
  borderBottom: 0, borderRadius: '50% 50% 0 0/40% 40% 0 0',
});

export default function Hero() {
  return (
    <section id="top" data-scene data-act="1" style={{ position: 'relative', height: '240vh' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', background: '#151515' }}>
        <div style={{ ...abs, inset: 0, background: 'radial-gradient(ellipse 60% 80% at 0% 55%,rgba(165,28,48,.9),transparent 62%),radial-gradient(ellipse 55% 60% at 100% 100%,rgba(24,42,74,.95),transparent 65%)' }} />
        <div style={arch('8vw', '-30vh', 0.16)} />
        <div style={arch('16vw', '-10vh', 0.09)} />
        <div style={{ ...abs, top: '-5%', left: '50%', width: '90vw', height: '110%', marginLeft: '-45vw', background: 'linear-gradient(180deg,rgba(244,184,96,.6),rgba(232,168,62,.14) 70%,transparent)', clipPath: 'polygon(47% 0,53% 0,100% 100%,0 100%)', transform: 'scaleX(calc(.45 + var(--t)*1.1))', transformOrigin: '50% 0', filter: 'blur(6px)' }} />
        <div style={{ ...abs, left: '50%', bottom: '-14vh', width: '130vmax', height: '65vmax', marginLeft: '-65vmax', transform: 'scale(calc(.3077 + var(--t)*.6923))', transformOrigin: '50% 100%', borderRadius: '50%', background: 'radial-gradient(closest-side,rgba(244,184,96,.8),rgba(232,168,62,.28) 55%,transparent)' }} />
        <div style={{ ...abs, left: 0, right: 0, bottom: 0, height: '22vh', background: 'linear-gradient(180deg,transparent,rgba(165,28,48,.4))' }} />
        <div aria-hidden style={{ ...abs, left: '3vw', top: '20vh', transform: 'rotate(-90deg) translateX(-100%)', transformOrigin: '0 0', fontFamily: 'var(--anton)', fontSize: '9vw', lineHeight: 1, color: 'transparent', WebkitTextStroke: '1px rgba(241,232,213,.22)', letterSpacing: '.06em' }}>CURTAIN</div>
        <div aria-hidden style={{ ...abs, right: '5vw', top: '15vh', fontFamily: 'var(--anton)', fontSize: '7vw', lineHeight: 0.9, color: 'transparent', WebkitTextStroke: '1px rgba(244,184,96,.3)', transform: 'rotate(4deg) translateY(calc(var(--t)*-30vh))' }}>ACT I<br />SCENE 01</div>
        <SocialLinks style={{ position: 'absolute', left: '50%', bottom: '5vh', transform: 'translateX(-50%) translateY(calc(var(--t)*-12vh))' }} />
        {dust.map((d, i) => (
          <span key={i} aria-hidden style={{ ...abs, borderRadius: '50%', background: '#F4B860', boxShadow: '0 0 6px #F4B860', left: d.x, top: d.y, width: d.s, height: d.s, animation: `drift ${d.t} linear ${d.dl} infinite` }} />
        ))}
        <div style={{ ...abs, inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '2vh', paddingTop: 30 }}>
          <div className="hero-tag" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.3em', color: '#F4B860', animation: 'flick 5s infinite' }}>AKSA ARCHIVE · PERFORMANCE 2026 · 5 MIN TO STAGE</div>
          <h1 style={{ margin: 0, fontFamily: 'var(--anton)', fontWeight: 400, fontSize: 'clamp(110px,31vw,520px)', lineHeight: 0.85, color: '#FFF8EA', letterSpacing: 'calc(.34em - var(--t)*.3em)', marginRight: 'calc(-.34em + var(--t)*.3em)', textShadow: '0 0 60px rgba(244,184,96,.5),0 6px 0 #A51C30', transform: 'scale(calc(1 + var(--t)*.25)) translateY(calc(var(--t)*-6vh))' }}>AKSA</h1>
          <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(28px,4.6vw,72px)', lineHeight: 1, color: '#F1E8D5' }}>The stage is yours.</div>
          <a href="#about" className="hl" style={{ '--c0': '#FFF8EA', '--c1': '#F4B860', '--b0': '#F4B860', '--b1': '#FFF8EA', color: 'var(--c)', borderBottom: '1px solid var(--bc)', marginTop: '2vh', display: 'inline-flex', gap: 14, alignItems: 'center', padding: '10px 2px', fontSize: 12, fontWeight: 800, letterSpacing: '.24em' } as CSS}>
            ENTER AKSA <span style={{ display: 'inline-block', animation: 'arrow 1.6s infinite' }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
