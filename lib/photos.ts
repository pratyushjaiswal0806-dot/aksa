/**
 * Single place to swap placeholder blocks for real photography.
 * Drop a file in /public/photos and set the path (or a remote URL) here.
 * Leave a key as `undefined` to keep the striped placeholder.
 *
 * Optionally give each a width/height of the source for better optimisation hints
 * (not required — images render with `fill` + object-fit: cover).
 */
export type PhotoKey =
  | 'blueRehearsal' | 'handsScript' | 'wings'
  | 'faceCloseup'
  | 'portraitActing' | 'portraitActing2' | 'portraitActing3' | 'midLaugh'
  | 'collageRehearsal' | 'collageHands' | 'collageFace' | 'collageWings' | 'collageLights'
  | 'collageProps' | 'collageCostume' | 'collageAudience' | 'collageTape'
  | 'dressingRoom' | 'costumeFragment'
  | 'poster1' | 'poster2' | 'poster3' | 'poster4' | 'poster5'
  | 'fragment1' | 'fragment2' | 'fragment3'
  | 'fullBleed'
  | 'person1' | 'person2' | 'person3';

export const PHOTOS: Record<PhotoKey, { src?: string; alt: string }> = {
  blueRehearsal: { alt: 'Cast rehearsing under blue light' },
  handsScript: { alt: 'Hands holding a marked-up script' },
  wings: { alt: 'The wings, stage left' },
  faceCloseup: { alt: 'Close-up of an actor’s face' },
  portraitActing: { alt: 'Actor portrait — expression 1' },
  portraitActing2: { alt: 'Actor portrait — expression 2' },
  portraitActing3: { alt: 'Actor portrait — expression 3' },
  midLaugh: { alt: 'Improv performers mid-laugh' },
  collageRehearsal: { alt: 'Rehearsal' },
  collageHands: { alt: 'Hands' },
  collageFace: { alt: 'Face' },
  collageWings: { alt: 'Wings' },
  collageLights: { alt: 'Lights' },
  collageProps: { alt: 'Props table' },
  collageCostume: { alt: 'Costume rail' },
  collageAudience: { alt: 'Audience' },
  collageTape: { alt: 'Tape marks on the floor' },
  dressingRoom: { alt: 'Dressing room mirror' },
  costumeFragment: { alt: 'Costume detail' },
  poster1: { alt: 'Production photo — The Understudy' },
  poster2: { alt: 'Production photo — Salt & Static' },
  poster3: { alt: 'Production photo — Room 14' },
  poster4: { alt: 'Production photo — Ghost Light' },
  poster5: { alt: 'Production photo — Interval' },
  fragment1: { alt: 'Redemption archive fragment 1' },
  fragment2: { alt: 'Redemption archive fragment 2' },
  fragment3: { alt: 'Redemption archive fragment 3' },
  fullBleed: { alt: 'Warm-graded rehearsal, full bleed' },
  person1: { alt: 'Portrait 1' },
  person2: { alt: 'Portrait 2' },
  person3: { alt: 'Portrait 3' },
};
