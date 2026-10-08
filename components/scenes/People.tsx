import Photo from '@/components/Photo';
import type { PhotoKey } from '@/lib/photos';
import { stripes, type CSS } from '@/lib/css';

const abs: CSS = { position: 'absolute' };
const nameStyle: CSS = { ...abs, fontFamily: 'var(--anton)', fontSize: 'clamp(70px,15vw,260px)', lineHeight: 0.88, textTransform: 'uppercase', whiteSpace: 'nowrap' };
const credit = (c: string, extra?: CSS): CSS => ({ ...abs, fontSize: 11, fontWeight: 800, letterSpacing: '.24em', lineHeight: 2, color: c, ...extra });
const role: CSS = { fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(28px,3vw,46px)', letterSpacing: 0, fontWeight: 400 };
const roleLine = (c: string): CSS => ({ opacity: 'var(--hv,0)' as unknown as number, transition: 'opacity .3s', color: c });

/** Portrait with cursor-following light. */
function Portrait({ id, bg, label, stripe, style, glow, cls }: { cls: string; id: PhotoKey; bg: string; label: string; stripe: string; style: CSS; glow: number }) {
  return (
    <Photo id={id} bg={bg} label={label} stripe={stripe} className={cls} sizes="(max-width:760px) 80vw, 46vw" labelStyle={{ left: 12, bottom: 10, fontSize: 11, letterSpacing: '.18em' }}
      style={{ ...style, boxShadow: `0 24px 50px rgba(0,0,0,${glow})` }}>
      <div aria-hidden style={{ ...abs, inset: 0, background: `radial-gradient(circle 180px at var(--mx,50%) var(--my,50%),rgba(255,248,234,${glow === 0.5 ? 0.4 : 0.45}),transparent)`, opacity: 'var(--hv,0)' as unknown as number, transition: 'opacity .3s' }} />
    </Photo>
  );
}

export default function People() {
  return (
    <section id="people" data-scene data-nav="people" data-act="3" style={{ '--r1': 'clamp(0,(var(--t) - .12)*3.4,1)', '--r2': 'clamp(0,(var(--t) - .56)*3.4,1)', position: 'relative', height: '380vh' } as CSS}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', background: '#FFF8EA' }}>
        <div style={{ ...abs, left: '3vw', top: 60, zIndex: 9, fontSize: 11, fontWeight: 800, letterSpacing: '.22em', mixBlendMode: 'difference', color: '#fff' }}>11 — PEOPLE · FEATURING</div>

        <div data-spot style={{ ...abs, inset: 0, background: '#FFF8EA', overflow: 'hidden' }}>
          <div style={{ ...abs, inset: 0, transform: 'translateX(calc(var(--r1)*-30vw))' }}>
            <div style={{ ...abs, left: 0, top: 0, width: '44vw', bottom: 0, background: '#F4B860' }} />
            <Portrait cls="pp-ph pp-ph1" id="person1" bg="linear-gradient(170deg,#E8A83E,#A51C30)" label="PORTRAIT 01 · PLACEHOLDER" stripe={stripes(135, 0.1)} glow={0.35}
              style={{ left: '5vw', top: '11vh', width: 'min(40vw,520px)', height: '84vh', transform: 'translate(calc(var(--nx,0)*10px),calc(var(--ny,0)*8px))' }} />
            <div className="pp-name pp-n1" style={{ ...nameStyle, left: '30vw', top: '16vh', color: 'color-mix(in srgb,#D4382F calc(var(--hv,0)*100%),#151515)', mixBlendMode: 'multiply' }}>Name<br />Surname</div>
            <div style={credit('#151515', { left: '46vw', bottom: '12vh' })}>STARRING<br /><span style={role}>Actor / Director</span><br /><span style={roleLine('#A51C30')}>ROLE — ACT I, SCENE 01</span></div>
          </div>
        </div>

        <div data-spot style={{ ...abs, inset: 0, background: '#182A4A', overflow: 'hidden', transform: 'translateX(calc((1 - var(--r1))*100%))' }}>
          <div style={{ ...abs, inset: 0, transform: 'translateX(calc(var(--r2)*-30vw))' }}>
            <Portrait cls="pp-ph pp-ph2" id="person2" bg="linear-gradient(190deg,#315CFF,#A51C30)" label="PORTRAIT 02 · PLACEHOLDER" stripe={stripes(45, 0.1)} glow={0.5}
              style={{ right: '5vw', top: '9vh', width: 'min(46vw,600px)', height: '88vh', transform: 'translate(calc(var(--nx,0)*-10px),calc(var(--ny,0)*8px))' }} />
            <div className="pp-name pp-n2" style={{ ...nameStyle, left: '4vw', top: '18vh', color: 'color-mix(in srgb,#F4B860 calc(var(--hv,0)*100%),#FFF8EA)', zIndex: 2 }}>Name<br />Surname</div>
            <div style={credit('#F1E8D5', { left: '5vw', bottom: '12vh' })}>AND<br /><span style={role}>Voice / Scripting</span><br /><span style={roleLine('#F4B860')}>ROLE — ACT II, SCENE 04</span></div>
          </div>
        </div>

        <div data-spot style={{ ...abs, inset: 0, background: '#D4382F', overflow: 'hidden', transform: 'translateX(calc((1 - var(--r2))*100%))' }}>
          <Portrait cls="pp-ph pp-ph3" id="person3" bg="linear-gradient(170deg,#F4B860,#34483D)" label="PORTRAIT 03 · PLACEHOLDER" stripe={stripes(135, 0.1)} glow={0.45}
            style={{ left: '8vw', top: '8vh', width: 'min(38vw,480px)', height: '86vh', transform: 'translate(calc(var(--nx,0)*10px),calc(var(--ny,0)*8px))' }} />
          <div className="pp-name pp-n3" style={{ ...nameStyle, left: '24vw', top: '30vh', color: 'color-mix(in srgb,#151515 calc(var(--hv,0)*100%),#FFF8EA)' }}>Name<br />Surname</div>
          <div style={credit('#FFF8EA', { right: '5vw', bottom: '12vh', textAlign: 'right' })}>WITH<br /><span style={role}>Improvisation / Direction</span><br /><span style={roleLine('#151515')}>ROLE — FINALE</span></div>
          <a href="#join" className="hl pp-cast" style={{ '--c0': '#FFF8EA', '--c1': '#151515', '--b0': '#FFF8EA', '--b1': '#151515', color: 'var(--c)', borderBottom: '1px solid var(--bc)', ...abs, right: '5vw', top: 62, fontSize: 12, fontWeight: 800, letterSpacing: '.22em', paddingBottom: 3 } as CSS}>MEET THE CAST →</a>
        </div>
      </div>
    </section>
  );
}
