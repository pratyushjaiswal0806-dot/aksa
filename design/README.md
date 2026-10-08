# Handoff: AKSA Website — Theatrical Scroll Experience

## Overview
Single-page scroll-driven site for AKSA, a student theatre collective. Concept: "a live performance you can scroll through." Black is used only for dramatic moments (hero, Dhurandhar, finale); everything else alternates paper, crimson, blue, amber and green environments.

## About the Design Files
`AKSA.dc.html` is a **design reference built in HTML** (prototype of look and behaviour), not production code. Recreate it in the target codebase's environment (e.g. Next.js/React + CSS modules/Tailwind) with its own patterns. If none exists, use Next.js or Astro. `support.js` is only the prototype runtime — do not ship it.

## Fidelity
**High-fidelity** for colour, typography, layout, motion. All photographs are labelled **placeholders** (striped gradient blocks, "PHOTO · …"); poster titles, names, roles and director's note are placeholder copy.

## Screens / Scenes (in scroll order)
Each scene is a `<section>`; pinned scenes are tall sections containing a `position:sticky; height:100vh` stage.
1. **Hero** (240vh pinned, charcoal): crimson edge glow, amber spotlight cone + floor pool that grow with scroll, proscenium outlines, 26 drifting dust dots, outlined poster fragments, "AKSA" (Anton, ~31vw, tracking collapses .34em→.04em, scales to 1.25), "The stage is yours." (Instrument Serif italic), link "ENTER AKSA →".
2. **About / backstage workspace** (190vh, paper #F1E8D5): photos, schedule sheet, stage diagram, handwritten notes, tape; each translates Y at its own speed (parallax). Headline "Before the first word, the room."
3. **We don't just perform. We become.** (330vh pinned, #FFF8EA): "WE DON'T JUST" charcoal; "PERFORM." crimson sweeps in from right then out left; "WE BECOME." electric blue wipes in with scale. Striped photographic texture behind (multiply).
4. **Script** (300vh pinned, crimson): cream typewriter page scales 1→4.4x, then slides up to reveal the next scene. Red/blue annotations, highlight, strike-through, coffee ring, tape.
5. **Disciplines** (620vh pinned): five full-screen panels revealed bottom-up via clip-path in order — Acting (red, portrait with expression flicker, dialogue lines moving), Voice (deep blue, letters stretch in waves, expanding rings), Direction (green/amber, nested pulsing frames), Scripting (paper, handwritten corrections), Improvisation (electric blue + crimson, jittering tiles/type).
6. **Break the grid** (340vh pinned, beige #EADFC8): 9 photos, varied size/rotation/z; first half: scatter drifts, one grows, one shrinks away; "EVERYTHING BEFORE THE CURTAIN RISES." Second half: photos regroup into rows, phrase swaps to "BEHIND THE CURTAIN".
7. **Backstage wall** (190vh, green #34483D): cue sheet, photos, tape, notes, timestamps, parallax. "Controlled chaos."
8. **Productions poster wall** (520vh pinned): horizontal track translates with scroll; active poster scales to 1, others down to .8; background gradient cross-fades per production (5 placeholder posters).
9. **Dhurandhar** (280vh pinned, charcoal + crimson): scanning red light bar, three photo fragments revealed by clip-path, archive labels, title in #D4382F wipes in. Original archive aesthetic — no official artwork.
10. **Full-bleed photo break** (140vh): warm graded placeholder, huge type sliding in opposite directions.
11. **People** (380vh pinned): three giant portraits push each other off horizontally (cream/amber, deep blue, crimson); name, role and credit text.
12. **Director's note interval** (paper, quiet).
13. **Finale** (400vh pinned, charcoal): spotlight expands; "You don't need to be an actor." → "You just need a story." → AKSA returns, "Take the stage.", "JOIN AKSA →".

## Interactions & Behavior
- **Scroll engine:** per scene compute `--p` (scene centre offset from viewport centre / vh), `--t` (0–1 progress through pinned height), `--a` (first half 0–1), `--b` (second half 0–1). All motion is CSS `calc()` on these (transform, clip-path, scale, letter-spacing). Update in a rAF-throttled scroll handler. Reimplement as you see fit (e.g. GSAP ScrollTrigger / Framer Motion `useScroll`).
- **Nav:** fixed 46px charcoal bar. Active scene sets underline + bottom-border colour: About amber #E8A83E, Disciplines blue #315CFF, Productions #D4382F, People #FFF8EA, Join #F4B860. A glowing 2px dot follows pointer along the links. 2px scroll-progress line.
- **Act indicator:** fixed right, vertical: ACT I (hero→script), ACT II (disciplines→posters), ACT III (Dhurandhar→people), FINALE.
- **Hover (`data-spot`):** posters tilt (rotateY ±5°, rotateX ∓4°), image shifts 3–5px, metadata fades in, border brightens; portraits shift, spotlight follows cursor, name changes colour, role appears.
- **Buttons:** text labels with thin underline + moving arrow, small uppercase, letter-spacing .22–.26em. No pills.
- **Grain:** fixed full-screen noise overlay, 16% multiply.
- **Reduced motion:** CSS animations disabled.
- **Mobile (<760px):** poster width 80vw. Needs real mobile design: fewer layers, simplified parallax, preserve colour/photo moments.
- **Performance:** lazy-load real images, responsive sizes, animate transform/opacity only, no per-frame layout reads beyond one pass.

## State Management
No app state. Only scroll progress per scene, active nav key, active act, pointer position per hover target.

## Design Tokens
Colours: Charcoal #151515, Paper #F1E8D5, Warm white #FFF8EA, Crimson #A51C30, Theatre red #D4382F, Amber #E8A83E, Tungsten #F4B860, Electric blue #315CFF, Deep blue #182A4A, Backstage green #34483D, Beige #EADFC8.
Fonts (Google): Anton (display, uppercase), Instrument Serif italic (editorial), Archivo 600/800 (micro labels, 11px, tracking .16–.26em, uppercase), Special Elite (script/typewriter), Caveat 500/700 (handwriting).
Image frames: 6–8px #FFF8EA border, shadow 0 12–30px rgba(0,0,0,.3–.5). Tape: 70–150×24–30px, rgba(212,56,47,.85) or amber, rotated.

## Assets
No external images. Replace every "PHOTO · …" block (rehearsals, portraits, hands/script, wings, costume, audience, tape marks, poster images, full-bleed break) with real AKSA photography.

## Files
- `AKSA.dc.html` — full design (template + logic class at bottom)
- `support.js` — prototype runtime only
