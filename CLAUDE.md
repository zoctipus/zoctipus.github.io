# Notes for Claude Code: zoctipus.github.io

Octi Zhang's personal site. Vite + React, HashRouter. Run `npm run dev` (localhost:5173),
deploy with `npm run deploy` (gh-pages), then `git push` to save source.

## Where things live
- Project cards: `src/components/Projects.jsx` (`getProjects()`), styles in `Projects.css`.
  `details` is HTML. Bold my name with `<span class='me'>Octi Zhang</span>`.
  The venue goes after `<p>` (e.g. `<p>CoRL 2026`). Links go in `<span class='project-links'>`.
- Videos are hosted on Backblaze B2, bucket `zoctipus`, folder `panel/videos/`, via `video('name')`.
  Cover/poster images are bundled in `public/panel/images/`.
  Upload: `b2 file upload --content-type video/mp4 zoctipus name.mp4 panel/videos/name.mp4`
- About page: `src/catalog/About.jsx`, routed at `#/about`, linked in `NavBar.jsx`.
- Octi Lab page is kept in the repo but intentionally unrouted and unlinked.

## Decisions made (Oct 2026)
- SGS card: full paper title, "2026 Oct", author list with * equal contribution and † equal advising,
  "CoRL 2026", and only a Paper link (arXiv 2610.12465). The title already links to https://sgs-rl.github.io/,
  so no separate Website link and no "Code" link.
- SGS carousel includes three real-world UR5e clips (sgs-real-nut, sgs-real-rod, sgs-real-gear-mesh),
  taken from the project page. Its terms allow reuse with credit and a link back, which the card provides.

## Writing style for the About page (important)
- Plain, direct, concrete. Avoid phrasing that sounds AI-written: no em dashes, no ornate metaphors
  ("the road was not kind"), no vague lines ("my record was uneven").
- Humble, not boastful. Don't list achievements or venues in the About text.
- Be careful about wording that could read as blaming the old lab, professors, or family.
  Phrase things as what I felt, not what they did. Don't name professors.
