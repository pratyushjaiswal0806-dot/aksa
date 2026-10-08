import { SOCIAL } from '@/lib/social';
import type { CSS } from '@/lib/css';

const ICONS = {
  instagram: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" /><path d="M10 9.2v5.6l4.8-2.8z" fill="currentColor" stroke="none" />
    </svg>
  ),
};

export default function SocialLinks({ style }: { style?: CSS }) {
  return (
    <div style={{ display: 'flex', gap: 18, ...style }}>
      {(Object.keys(ICONS) as (keyof typeof ICONS)[]).map(k => (
        <a key={k} href={SOCIAL[k] || '#'} target={SOCIAL[k] ? '_blank' : undefined} rel="noopener noreferrer" aria-label={`AKSA on ${k === 'youtube' ? 'YouTube' : 'Instagram'}`}
          className="hl" style={{ '--c0': '#F1E8D5', '--c1': '#F4B860', color: 'var(--c)', display: 'inline-flex', transition: 'color .2s' } as CSS}>
          {ICONS[k]}
        </a>
      ))}
    </div>
  );
}
