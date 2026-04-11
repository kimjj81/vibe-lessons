# Project AGENTS.md

This repository is a lecture-material website, not a general product app.

The primary goal is to publish, organize, and present course content on the web.
Code exists to support lecture readability, slide delivery, navigation, examples,
and bilingual course pages.

## Project Shape

- Runtime stack: Astro + React.
- Course registry lives in `src/courses/`.
- Slide components live in `src/slides/`.
- Public course and guide routes live in `src/pages/`.
- Example assets for learners live in `public/example/`.
- `draft/` stores the original lecture source material and work-in-progress manuscripts.
- `docs/` stores distilled technical references for frameworks and tools used by this site.

## Content Priorities

- Favor lecture clarity over product-style feature expansion.
- Favor reading flow, information hierarchy, and presentation ergonomics.
- Preserve the teaching intent of the source material in `draft/`.
- Do not invent new technical claims, curriculum, or examples unless explicitly requested.
- When content and UI trade off against each other, preserve the lecture content first.

## Editing Rules

- Prefer minimal diffs.
- Treat `draft/` as source material, not as generated output.
- Do not overwrite or reorganize `draft/` unless explicitly requested.
- Keep bilingual structure aligned when touching localized routes or course metadata.
- Keep overview pages, guide pages, and slide pages consistent for the same course slug.
- Preserve stable public paths unless the user explicitly asks to change routing.

## Docs Directory

- `docs/` is for AI-friendly technical reference notes, not arbitrary scratch notes.
- When adopting or preparing a major framework change, add or update a concise reference in `docs/`.
- When both formats exist for the same topic, read `*.llms.txt` first and use `*.md` as the fuller fallback source.
- For reveal.js migration work, read `docs/revealjs.md` first and prefer official patterns captured there.

## reveal.js Migration Guidance

- This project is preparing to migrate slide rendering toward reveal.js.
- Prefer `docs/revealjs.llms.txt` as the first-pass reference and `docs/revealjs.md` for expanded details.
- Prefer solutions that map cleanly to `reveal.js` or `@revealjs/react`.
- Avoid deepening the custom slide-navigation implementation unless it is required for current behavior.
- Prefer using reveal.js built-ins for keyboard navigation, touch navigation, overview mode, slide numbers, speaker notes, PDF export, fragments, and scroll view instead of re-implementing them.
- If a custom overlay is needed, keep it outside the deck runtime when possible.

## Verification

- Default commands:
  - `npm install`
  - `npm run dev`
  - `npm run build`
- For content-only or docs-only edits, build verification is optional unless requested.
- For routing, framework, or slide runtime changes, prefer at least `npm run build` before claiming completion when verification is requested.

## Ask Before Proceeding

- Ask before changing lecture substance in ways that alter meaning.
- Ask before deleting or renaming public course routes.
- Ask before rewriting `draft/` manuscripts.
- Ask before introducing a new presentation framework runtime outside the current migration direction.
