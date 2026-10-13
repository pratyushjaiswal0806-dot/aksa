import type { CSS } from '@/lib/css';
import MobileMenu from './MobileMenu';

const LINKS = [
  { key: 'about', label: 'ABOUT', color: '#E8A83E', hover: '#E8A83E' },
  { key: 'disciplines', label: 'DISCIPLINES', color: '#315CFF', hover: '#7F9BFF' },
  { key: 'productions', label: 'PRODUCTIONS', color: '#D4382F', hover: '#D4382F' },
  { key: 'join', label: 'JOIN', color: '#F4B860', hover: '#F4B860' },
] as const;

export default function Nav() {
  return (
    <nav
      aria-label="Primary"
      style={{
        '--navc': '#E8A83E', '--prog': 0,
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 80, height: 46,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(12px,3vw,36px)', background: 'rgba(21,21,21,.9)',
        backdropFilter: 'blur(6px)', borderBottom: '1px solid var(--navc)',
      } as CSS}
    >
      <a href="#top" style={{ fontFamily: 'var(--anton)', fontSize: 22, letterSpacing: '.14em', color: '#F1E8D5' }}>AKSA</a>
      <div data-links className="m-hide" style={{ position: 'relative', display: 'flex', gap: 'clamp(10px,2.4vw,34px)', height: '100%', alignItems: 'center' }}>
        {LINKS.map(l => (
          <a
            key={l.key}
            href={`#${l.key}`}
            className="hl"
            style={{
              '--c0': '#F1E8D5', '--c1': l.hover, color: 'var(--c)',
              position: 'relative', display: 'block', padding: '15px 0',
              fontSize: 11, fontWeight: 600, letterSpacing: '.18em',
            } as CSS}
          >
            {l.label}
            <span
              style={{
                position: 'absolute', left: 0, right: 0, bottom: 8, height: 2, background: l.color,
                transform: `scaleX(var(--on-${l.key},0))`, transformOrigin: 'left', transition: 'transform .4s',
              }}
            />
          </a>
        ))}
        <i
          aria-hidden
          style={{
            position: 'absolute', bottom: -1, left: 0, width: 40, height: 2, marginLeft: -20,
            background: '#F4B860', boxShadow: '0 0 14px 5px rgba(244,184,96,.8)', borderRadius: '50%',
            opacity: 'var(--nh,0)' as unknown as number, transform: 'translateX(var(--px,0px))',
            transition: 'opacity .25s', pointerEvents: 'none',
          }}
        />
      </div>
      <MobileMenu />
      <div
        role="progressbar" aria-label="Page progress" aria-hidden
        style={{ position: 'absolute', left: 0, bottom: -1, height: 2, width: 'calc(var(--prog,0)*100%)', background: 'var(--navc)' }}
      />
    </nav>
  );
}
