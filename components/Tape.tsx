import type { CSS } from '@/lib/css';

/** Strip of masking tape. Pass position + size + rotation via style. */
export default function Tape({ style, className }: { style: CSS; className?: string }) {
  return <span aria-hidden className={className} style={{ position: 'absolute', background: 'rgba(212,56,47,.85)', ...style }} />;
}
