import Image from 'next/image';
import type { ReactNode } from 'react';
import { PHOTOS, type PhotoKey } from '@/lib/photos';
import { label10, stripes, type CSS } from '@/lib/css';

type Props = {
  /** Key into lib/photos.ts — set a `src` there to replace the placeholder everywhere. */
  id: PhotoKey;
  /** Placeholder fill (any CSS background) shown until a real src exists. */
  bg: string;
  /** Placeholder caption, e.g. "PHOTO · WINGS". Hidden once a real image is set. */
  label?: string;
  labelStyle?: CSS;
  /** Responsive `sizes` hint for next/image. */
  sizes?: string;
  /** Eager-load (above the fold only). Everything else is lazy. */
  priority?: boolean;
  /** Frame styles: position, size, border, shadow, transform… */
  style?: CSS;
  className?: string;
  /** Overlays inside the frame (tape, hover lights…). Rendered above the image. */
  children?: ReactNode;
  stripe?: string | false;
};

export default function Photo({
  id, bg, label, labelStyle, sizes = '(max-width: 760px) 80vw, 40vw',
  priority = false, style, className, children, stripe,
}: Props) {
  const { src, alt } = PHOTOS[id];
  return (
    <div className={className} style={{ position: 'absolute', ...style }} data-photo={id}>
      {src ? (
        <Image
          src={src} alt={alt} fill sizes={sizes}
          loading={priority ? 'eager' : 'lazy'} priority={priority}
          style={{ objectFit: 'cover' }}
        />
      ) : (
        <>
          <div
            aria-hidden
            style={{
              position: 'absolute', inset: 0,
              background: `${stripe === false ? '' : (stripe ?? stripes()) + ','}${bg}`,
            }}
          />
          {label && <span style={{ ...label10, ...labelStyle }}>{label}</span>}
        </>
      )}
      {children}
    </div>
  );
}
