import Photo from '@/components/Photo';
import Tape from '@/components/Tape';
import type { PhotoKey } from '@/lib/photos';
import type { CSS } from '@/lib/css';

const abs: CSS = { position: 'absolute' };
type C = { id: PhotoKey; sx: string; sy: string; gx: string; gy: string; sr: string; w: string; h: string; dy: number; gr: number; z: number; bg: string; label: string; tape: string };
const g = (a: string, b: string) => `linear-gradient(160deg,${a},${b})`;
const collage: C[] = [
  { id: 'collageRehearsal', sx: '4vw', sy: '14vh', gx: '4vw', gy: '12vh', sr: '-6deg', w: '21vw', h: '27vh', dy: -30, gr: 0, z: 2, bg: g('#315CFF', '#182A4A'), label: 'PHOTO · REHEARSAL', tape: '-6deg' },
  { id: 'collageHands', sx: '26vw', sy: '58vh', gx: '24vw', gy: '12vh', sr: '4deg', w: '17vw', h: '22vh', dy: -50, gr: 0, z: 3, bg: g('#E8A83E', '#A51C30'), label: 'PHOTO · HANDS', tape: '8deg' },
  { id: 'collageFace', sx: '50vw', sy: '10vh', gx: '42vw', gy: '12vh', sr: '-3deg', w: '26vw', h: '34vh', dy: -20, gr: 0.7, z: 1, bg: g('#D4382F', '#151515'), label: 'PHOTO · FACE', tape: '-10deg' },
  { id: 'collageWings', sx: '72vw', sy: '52vh', gx: '60vw', gy: '12vh', sr: '7deg', w: '18vw', h: '24vh', dy: -60, gr: 1.4, z: 4, bg: g('#34483D', '#F4B860'), label: 'PHOTO · WINGS', tape: '5deg' },
  { id: 'collageLights', sx: '80vw', sy: '12vh', gx: '78vw', gy: '12vh', sr: '-8deg', w: '16vw', h: '21vh', dy: -35, gr: -0.9, z: 2, bg: g('#F4B860', '#A51C30'), label: 'PHOTO · LIGHTS', tape: '-4deg' },
  { id: 'collageProps', sx: '8vw', sy: '60vh', gx: '4vw', gy: '66vh', sr: '5deg', w: '16vw', h: '21vh', dy: -45, gr: 0, z: 3, bg: g('#182A4A', '#315CFF'), label: 'PHOTO · PROPS', tape: '9deg' },
  { id: 'collageCostume', sx: '38vw', sy: '30vh', gx: '24vw', gy: '66vh', sr: '-5deg', w: '14vw', h: '18vh', dy: -25, gr: 0, z: 5, bg: g('#A51C30', '#E8A83E'), label: 'PHOTO · COSTUME', tape: '-7deg' },
  { id: 'collageAudience', sx: '58vw', sy: '64vh', gx: '42vw', gy: '66vh', sr: '3deg', w: '15vw', h: '20vh', dy: -55, gr: 0, z: 2, bg: g('#151515', '#D4382F'), label: 'PHOTO · AUDIENCE', tape: '6deg' },
  { id: 'collageTape', sx: '18vw', sy: '34vh', gx: '60vw', gy: '66vh', sr: '-9deg', w: '13vw', h: '17vh', dy: -40, gr: 0, z: 6, bg: g('#F1E8D5', '#315CFF'), label: 'PHOTO · TAPE MARKS', tape: '-3deg' },
];
const tag = (extra: CSS): CSS => ({ ...abs, zIndex: 6, fontSize: 11, fontWeight: 800, letterSpacing: '.2em', ...extra });

export default function BreakGrid() {
  return (
    <section data-scene data-nav="productions" data-act="2" style={{ position: 'relative', height: '340vh', background: '#EADFC8' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', background: 'radial-gradient(ellipse 60% 50% at 20% 20%,rgba(244,184,96,.45),transparent 70%),#EADFC8' }}>
        <div style={{ ...abs, left: '3vw', top: 62, fontSize: 11, fontWeight: 800, letterSpacing: '.22em', color: '#A51C30' }}>06 — BREAK THE GRID</div>
        <div className="bg-h1" style={{ ...abs, left: 0, right: 0, top: '50%', marginTop: '-13vw', textAlign: 'center', fontFamily: 'var(--anton)', fontSize: 'clamp(50px,11vw,190px)', lineHeight: 0.92, textTransform: 'uppercase', color: '#151515', transform: 'translateY(calc(var(--b)*-70vh)) scale(calc(.7 + var(--a)*.3))', padding: '0 4vw', textShadow: '3px 3px 0 #F4B860' }}>Everything before the curtain <span style={{ color: '#D4382F' }}>rises.</span></div>
        <div className="bg-h2" style={{ ...abs, left: 0, right: 0, top: '50%', marginTop: '-5vw', textAlign: 'center', fontFamily: 'var(--anton)', fontSize: 'clamp(46px,10vw,170px)', lineHeight: 0.95, textTransform: 'uppercase', color: '#315CFF', clipPath: 'inset(0 calc((1 - var(--b))*50%) 0 calc((1 - var(--b))*50%))', textShadow: '3px 3px 0 #F4B860', zIndex: 1 }}>Behind the curtain</div>
        {collage.map(c => (
          <Photo key={c.id} id={c.id} className={`bg-c bg-c${collage.indexOf(c)}`} bg={c.bg} label={c.label} sizes="25vw"
            style={{
              '--sx': c.sx, '--sy': c.sy, '--gx': c.gx, '--gy': c.gy, '--sr': c.sr, '--dy': c.dy, '--gr': c.gr,
              width: c.w, height: c.h, zIndex: c.z,
              left: 'calc(var(--sx)*(1 - var(--b)) + var(--gx)*var(--b))',
              top: 'calc(var(--sy)*(1 - var(--b)) + var(--gy)*var(--b))',
              transform: 'rotate(calc(var(--sr)*(1 - var(--b)) + var(--a)*var(--gr)*20deg*(1 - var(--b)))) translateY(calc((1 - var(--b))*var(--a)*var(--dy)*1vh)) scale(calc(1 + var(--a)*var(--gr)*(1 - var(--b))))',
              border: '7px solid #FFF8EA', boxShadow: '0 12px 26px rgba(40,20,0,.35)',
            } as CSS}>
            <Tape style={{ left: '30%', top: -17, width: 70, height: 24, transform: `rotate(${c.tape})` }} />
          </Photo>
        ))}
        <div style={tag({ left: '30vw', top: '20vh', color: '#151515', background: '#F4B860', padding: '4px 8px', transform: 'translateY(calc(var(--a)*-14vh))' })}>SCENE 04</div>
        <div style={tag({ left: '62vw', top: '48vh', color: '#FFF8EA', background: '#151515', padding: '4px 8px', transform: 'translateY(calc(var(--a)*-20vh))' })}>TAKE 03</div>
        <div className="bg-tag3" style={tag({ left: '8vw', top: '70vh', color: '#151515', border: '1px solid #151515', padding: '4px 8px', transform: 'translateY(calc(var(--a)*-18vh))' })}>REHEARSAL 22:14</div>
        <div style={tag({ left: '46vw', top: '80vh', fontFamily: 'var(--hand)', fontSize: 30, letterSpacing: 0, color: '#D4382F', transform: 'rotate(-6deg) translateY(calc(var(--a)*-22vh))' })}>take again ↻</div>
        <div style={tag({ right: '4vw', top: '14vh', color: '#315CFF', transform: 'translateY(calc(var(--a)*-10vh))' })}>LIGHTING · BACKSTAGE</div>
      </div>
    </section>
  );
}
