import type { CSS } from '@/lib/css';

/** Strip of masking tape. Pass position + size + rotation via style. */
export default function Tape({ style }: { style: CSS }) {
  return <span aria-hidden style={{ position: 'absolute', background: 'rgba(212,56,47,.85)', ...style }} />;
}
