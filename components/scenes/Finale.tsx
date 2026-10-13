import type { CSS } from '@/lib/css';

const abs: CSS = { position: 'absolute' };
const center: CSS = { ...abs, inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 5vw' };

export default function Finale() {
  return (
    <section id="join" data-scene data-nav="join" data-act="4" style={{ position: 'relative', height: '400vh', background: '#151515' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', background: '#151515' }}>
        <div aria-hidden style={{ ...abs, left: '50%', top: '50%', width: '136vmax', height: '136vmax', margin: '-68vmax 0 0 -68vmax', transform: 'scale(calc(.1176 + var(--t)*.8824))', borderRadius: '50%', background: 'radial-gradient(closest-side,rgba(244,184,96,.9),rgba(232,168,62,.35) 55%,rgba(165,28,48,.2) 80%,transparent)' }} />
        <div aria-hidden style={{ ...abs, top: 0, left: '50%', width: '40vw', height: '60%', marginLeft: '-20vw', background: 'linear-gradient(180deg,rgba(244,184,96,.4),transparent)', clipPath: 'polygon(46% 0,54% 0,100% 100%,0 100%)', filter: 'blur(4px)' }} />
        <div style={{ ...center, fontFamily: 'var(--anton)', fontSize: 'clamp(40px,8.4vw,150px)', lineHeight: 0.95, textTransform: 'uppercase', color: '#FFF8EA', opacity: 'calc(1 - min(1,max(0,(var(--t) - .22)*7)))' as unknown as number, transform: 'translateY(calc(max(0,var(--t) - .22)*-60vh))', textShadow: '0 0 30px #151515' }}>You don&apos;t need to be an actor.</div>
        <div style={{ ...center, fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(44px,9vw,160px)', lineHeight: 0.95, color: '#151515', opacity: 'calc(min(1,max(0,(var(--t) - .3)*7)) - min(1,max(0,(var(--t) - .5)*7)))' as unknown as number, transform: 'translateY(calc((1 - min(1,max(0,(var(--t) - .3)*7)))*30vh))' }}>You just need a story.</div>
        <div style={{ ...center, flexDirection: 'column', gap: '3vh', background: 'radial-gradient(ellipse 60% 60% at 50% 50%,rgba(165,28,48,.5),#151515 75%)', opacity: 'min(1,max(0,(var(--t) - .56)*6))' as unknown as number, paddingTop: 30 }}>
          <div style={{ fontFamily: 'var(--anton)', fontSize: 'clamp(110px,30vw,500px)', lineHeight: 0.85, color: '#FFF8EA', textShadow: '0 0 60px rgba(244,184,96,.6),0 6px 0 #A51C30', transform: 'scale(calc(.8 + min(1,max(0,(var(--t) - .56)*3))*.2))' }}>AKSA</div>
          <div style={{ fontFamily: 'var(--anton)', fontSize: 'clamp(30px,6vw,100px)', lineHeight: 1, color: '#F4B860', textTransform: 'uppercase', letterSpacing: '.06em' }}>Take the stage.</div>
          <a href="https://forms.gle/4Vn5F712V1SdXhYa7" target="_blank" rel="noopener noreferrer" className="join-cta" style={{ display: 'inline-flex', gap: 14, alignItems: 'center', padding: '18px 38px', fontSize: 14, fontWeight: 800, letterSpacing: '.26em' } as CSS}>JOIN AKSA <span style={{ display: 'inline-block', animation: 'arrow 1.6s infinite' }}>→</span></a>
          <div style={{ ...abs, left: '4vw', right: '4vw', bottom: '4vh', display: 'flex', justifyContent: 'space-between', fontSize: 11, fontWeight: 800, letterSpacing: '.2em', color: '#F1E8D5' }}><span>AKSA ARCHIVE · PERFORMANCE 2026</span><span>FIN. LIGHTS DOWN.</span></div>
        </div>
      </div>
    </section>
  );
}
