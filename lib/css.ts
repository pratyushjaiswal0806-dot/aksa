import type { CSSProperties } from 'react';

/** Style object that also accepts custom properties (--foo). */
export type CSS = CSSProperties & { [k: `--${string}`]: string | number | undefined };

/** Shared fragments from the design reference. */
export const stripes = (angle = 135, a = 0.08, step = 10) =>
  `repeating-linear-gradient(${angle}deg,rgba(255,255,255,${a}) 0 ${step}px,transparent ${step}px ${step * 2}px)`;

export const label10: CSS = {
  position: 'absolute',
  left: 8,
  bottom: 6,
  fontSize: 10,
  fontWeight: 800,
  letterSpacing: '.16em',
  color: '#FFF8EA',
};

export const micro = (color: string, ls = '.22em'): CSS => ({
  fontSize: 11,
  fontWeight: 800,
  letterSpacing: ls,
  color,
});
