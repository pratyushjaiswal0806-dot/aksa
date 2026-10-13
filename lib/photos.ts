/**
 * Single place to swap placeholder blocks for real photography.
 * Drop a file in /public/photos and set the path (or a remote URL) here.
 * Leave a key as `undefined` to keep the striped placeholder.
 *
 * Images render with `fill` + object-fit: cover; `pos` sets object-position (the focal point kept
 * in frame when the slot's shape crops the photo). Sources are WebP, max 1600px on the long edge.
 */
export type PhotoKey =
  | 'blueRehearsal' | 'handsScript' | 'wings'
  | 'faceCloseup'
  | 'portraitActing' | 'portraitActing2' | 'portraitActing3' | 'midLaugh'
  | 'collageRehearsal' | 'collageHands' | 'collageFace' | 'collageWings' | 'collageLights'
  | 'collageProps' | 'collageCostume' | 'collageAudience' | 'collageTape'
  | 'dressingRoom' | 'costumeFragment'
  | 'poster1' | 'poster2' | 'poster3' | 'poster4'
  | 'fragment1' | 'fragment2' | 'fragment3';

const p = (f: string) => `/photos/${f}.webp`;

export const PHOTOS: Record<PhotoKey, { src?: string; alt: string; pos?: string }> = {
  blueRehearsal: { src: p('reading-blue-wall'), alt: 'An actor reading against a blue wall' },
  handsScript: { src: p('hands-night'), alt: 'Two hands passing a note at night', pos: '52% 60%' },
  wings: { src: p('stage-wide-scene'), alt: 'A scene on stage, seen from the wings' },
  faceCloseup: { src: p('face-red-stripes'), alt: 'Close-up of an actor in a red striped shirt', pos: '45% 40%' },
  portraitActing: { src: p('face-corridor'), alt: 'Actor close-up in a corridor', pos: '22% 40%' },
  portraitActing2: { src: p('face-mezzanine'), alt: 'Actor close-up, looking off-frame', pos: '6% 40%' },
  portraitActing3: { src: p('faces-night'), alt: 'Actors face to face at night', pos: '74% 40%' },
  midLaugh: { src: p('stage-red-mic'), alt: 'Performers mid-scene under red light', pos: '60% 50%' },
  collageRehearsal: { src: p('stage-seated-scene'), alt: 'Two actors seated on stage' },
  collageHands: { src: p('handshake'), alt: 'A handshake between actors', pos: '45% 50%' },
  collageFace: { src: p('mall-conversation'), alt: 'Two actors in conversation' },
  collageWings: { src: p('stage-lineup'), alt: 'The cast lined up on stage' },
  collageLights: { src: p('stage-red-lights'), alt: 'The stage under red lights' },
  collageProps: { src: p('canteen-props'), alt: 'Actors around a canteen table' },
  collageCostume: { src: p('prod-family-business-scene'), alt: 'The Family Business: a scene in costume' },
  collageAudience: { src: p('prod-75-attendance-cast'), alt: '75% Attendance: the cast on stage' },
  collageTape: { src: p('stage-curtain-call'), alt: 'Curtain call' },
  dressingRoom: { src: p('makeup-corridor'), alt: 'Makeup being applied between takes' },
  costumeFragment: { src: p('makeup-night'), alt: 'Makeup touch-up at night', pos: '42% 50%' },
  poster1: { src: p('prod-75-attendance-poster'), alt: '75% Attendance poster' },
  poster2: { src: p('prod-family-business-poster'), alt: 'The Family Business poster' },
  poster3: { src: p('prod-1095-nights-title'), alt: '1095 Nights title card', pos: '50% 30%' },
  poster4: { src: p('prod-redemption-poster'), alt: 'Redemption poster', pos: '50% 35%' },
  fragment1: { src: p('prod-redemption-still-1'), alt: 'Redemption: a confrontation' },
  fragment2: { src: p('prod-redemption-still-2'), alt: 'Redemption: a conversation in a hostel room', pos: '62% 50%' },
  fragment3: { src: p('prod-redemption-still-3'), alt: 'Redemption: two friends at night' },
};
