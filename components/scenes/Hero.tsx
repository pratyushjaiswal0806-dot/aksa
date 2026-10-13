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

/**
 * The title's opening letter-spacing, done as per-letter translateX so scrolling never re-lays out
 * or re-paints the 500px glyphs + 60px glow. Shadows are split into layers beneath the text so they
 * stack exactly as one text run would: offset shadow, then glow, then glyphs.
 */
/** Torn top edge of the About sheet. It lives here, at the point where About starts (200vh), so it travels with About. */
const TORN = `polygon(0 100%,${Array.from({ length: 41 }, (_, i) => `${i * 2.5}% ${[40, 10, 55, 25, 0, 45, 15, 60, 30, 5][i % 10] + (i * 7) % 20}%`).join(',')},100% 100%)`;

const SPACING = '(.34em - var(--a)*.3em)';

/*
 * Timing: the section is 300vh, so it is pinned for 200vh of scroll.
 *   --a (first 100vh): the title opens up and the stage lights rise.
 *   --b (second 100vh): About, pulled up by -100vh, slides over the pinned hero. The hero dims
 *     and sinks back underneath it.
 * Everything is transform/opacity, so the handover is compositor-only.
 */
const TITLE_LAYERS = [
  { color: 'transparent', shadow: '0 6px 0 #A51C30' },
  { color: 'transparent', shadow: '0 0 60px rgba(244,184,96,.5)' },
  { color: 'inherit', shadow: 'none' },
];

export default function Hero() {
  return (
    <section id="top" data-scene data-act="1" style={{ position: 'relative', height: '300vh' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', background: '#151515', transform: 'scale(calc(1 - var(--b)*.08)) translateY(calc(var(--b)*-4vh))', transformOrigin: '50% 100%' }}>
        <div style={{ ...abs, inset: 0, background: 'radial-gradient(ellipse 60% 80% at 0% 55%,rgba(165,28,48,.9),transparent 62%),radial-gradient(ellipse 55% 60% at 100% 100%,rgba(24,42,74,.95),transparent 65%)' }} />
        <div style={arch('8vw', '-30vh', 0.16)} />
        <div style={arch('16vw', '-10vh', 0.09)} />
        <div style={{ ...abs, top: '-5%', left: '50%', width: '90vw', height: '110%', marginLeft: '-45vw', background: 'linear-gradient(180deg,rgba(244,184,96,.6),rgba(232,168,62,.14) 70%,transparent)', clipPath: 'polygon(47% 0,53% 0,100% 100%,0 100%)', transform: 'scaleX(calc(.45 + var(--a)*1.1))', transformOrigin: '50% 0', filter: 'blur(6px)' }} />
        <div style={{ ...abs, left: '50%', bottom: '-14vh', width: '130vmax', height: '65vmax', marginLeft: '-65vmax', transform: 'scale(calc(.3077 + var(--a)*.6923))', transformOrigin: '50% 100%', borderRadius: '50%', background: 'radial-gradient(closest-side,rgba(244,184,96,.8),rgba(232,168,62,.28) 55%,transparent)' }} />
        <div style={{ ...abs, left: 0, right: 0, bottom: 0, height: '22vh', background: 'linear-gradient(180deg,transparent,rgba(165,28,48,.4))' }} />
        <div aria-hidden style={{ ...abs, left: '3vw', top: '20vh', transform: 'rotate(-90deg) translateX(-100%)', transformOrigin: '0 0', fontFamily: 'var(--anton)', fontSize: '9vw', lineHeight: 1, color: 'transparent', WebkitTextStroke: '1px rgba(241,232,213,.22)', letterSpacing: '.06em' }}>CURTAIN</div>
        <div aria-hidden style={{ ...abs, right: '5vw', top: '15vh', fontFamily: 'var(--anton)', fontSize: '7vw', lineHeight: 0.9, color: 'transparent', WebkitTextStroke: '1px rgba(244,184,96,.3)', transform: 'rotate(4deg) translateY(calc(var(--a)*-30vh))' }}>ACT I<br />SCENE 01</div>
        <SocialLinks style={{ position: 'absolute', left: '50%', bottom: '5vh', transform: 'translateX(-50%) translateY(calc(var(--a)*-12vh))' }} />
        {dust.map((d, i) => (
          <span key={i} aria-hidden style={{ ...abs, borderRadius: '50%', background: '#F4B860', boxShadow: '0 0 6px #F4B860', left: d.x, top: d.y, width: d.s, height: d.s, animation: `drift ${d.t} linear ${d.dl} infinite` }} />
        ))}
        <div aria-hidden style={{ ...abs, inset: 0, background: 'radial-gradient(ellipse 80% 70% at 50% 40%,rgba(21,21,21,.55),#151515)', opacity: 'calc(var(--b)*.8)', pointerEvents: 'none' }} />
        <div style={{ ...abs, inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '2vh', paddingTop: 30, transform: 'translateY(calc(var(--b)*-22vh))' }}>
          <div className="hero-tag" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.3em', color: '#F4B860', animation: 'flick 5s infinite' }}>AKSA ARCHIVE · PERFORMANCE 2026 · 5 MIN TO STAGE</div>
          <h1 aria-label="AKSA" style={{ position: 'relative', margin: 0, fontFamily: 'var(--anton)', fontWeight: 400, fontSize: 'clamp(110px,31vw,520px)', lineHeight: 0.85, color: '#FFF8EA', transform: 'scale(calc(1 + var(--a)*.25)) translateY(calc(var(--a)*-6vh))', transformOrigin: `calc(50% + ${SPACING} / 2) 50%` }}>
            {TITLE_LAYERS.map((l, n) => (
              <span key={n} aria-hidden style={{ ...(n < 2 ? { ...abs, inset: 0 } : { position: 'relative' }), display: 'block', color: l.color, textShadow: l.shadow }}>
                {[...'AKSA'].map((c, i) => <span key={i} style={{ display: 'inline-block', transform: `translateX(calc(${i - 1.5} * ${SPACING}))` }}>{c}</span>)}
              </span>
            ))}
          </h1>
          <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(28px,4.6vw,72px)', lineHeight: 1, color: '#F1E8D5' }}>The stage is yours.</div>
          <a href="#about" className="hl" style={{ '--c0': '#FFF8EA', '--c1': '#F4B860', '--b0': '#F4B860', '--b1': '#FFF8EA', color: 'var(--c)', borderBottom: '1px solid var(--bc)', marginTop: '2vh', display: 'inline-flex', gap: 14, alignItems: 'center', padding: '10px 2px', fontSize: 12, fontWeight: 800, letterSpacing: '.24em' } as CSS}>
            ENTER AKSA <span style={{ display: 'inline-block', animation: 'arrow 1.6s infinite' }}>→</span>
          </a>
        </div>
      </div>
      <div aria-hidden style={{ position: 'absolute', zIndex: 2, left: 0, right: 0, top: 'calc(200vh - 17px)', height: 18, background: '#F1E8D5', clipPath: TORN }} />
    </section>
  );
}
