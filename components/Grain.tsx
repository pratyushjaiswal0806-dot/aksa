/**
 * Film grain. Equivalent to the reference's `multiply` at 16% (it only darkens ~2%, so 0.025 alpha here matches), but done as a plain alpha
 * overlay (black, alpha = 1 − luminance of the noise) so the browser never has to
 * re-blend the whole page against a fixed layer on every scroll frame.
 */
const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='.8' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -.3 -.59 -.11 0 1'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function Grain() {
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed', inset: 0, zIndex: 90, pointerEvents: 'none',
        opacity: 0.025, background: NOISE, transform: 'translateZ(0)',
      }}
    />
  );
}
