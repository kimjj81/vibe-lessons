[![Korean](https://img.shields.io/badge/lang-ko-lightgrey.svg)](./README.md) [![English](https://img.shields.io/badge/lang-en-blue.svg)](./README.en.md)

# Vibe Coding Lecture Repository

This repository started as a set of lecture materials for a vibe-coding course. The live cohort closed earlier than expected, so the in-progress materials were published here instead of being left unused.

You can also review Anthropic's official public lecture materials. The goal of this repository is not to replace them, but to provide an additional independently organized learning path.

- Full Anthropic learning hub: https://www.anthropic.com/learn
- Claude Code beginner course: https://anthropic.skilljar.com/claude-code-in-action

Because this itself is a vibe-coding project, most of the site and course materials were built with AI assistance. That also means there are still rough edges, and the repository will continue to be refined over time.

Live preview: https://lesson.studiojin.dev

## Public courses

- `Vibe Coding MVP Masterclass`
  - A course about compressing an idea into a practical MVP and carrying it through design, implementation, verification, and launch.
  - It covers AI-assisted project workflows, AGENTS/PRD documentation, stack selection, and cost/security judgment.
- `Cusdis Automation`
  - A hands-on course on connecting n8n, Gemini, and Cusdis to automate comment approval and spam filtering.
  - It includes webhook wiring, JSON-contract-based AI moderation, JavaScript post-processing, approval API calls, and an operations checklist.
- `CMS & Content Infrastructure`
  - A course comparing Monolithic CMS, Headless CMS, SaaS Embed, and Self-hosted approaches from a service operations perspective.
  - It focuses on content models, permissions, cache invalidation, and how to combine comments, search, and analytics capabilities in a practical architecture.
- `SemVer Release Automation`
  - A course on creating GitHub Releases from SemVer tags and carrying generated notes, optional LLM polishing, and homepage sync through one release pipeline.
  - It covers draft-release strategy, cross-repo dispatch, Astro import, and an end-to-end verification checklist.

## Lecture guide pages and example assets

- Instead of sending users directly from the course list into the slide deck, each course now also has a dedicated lecture guide page.
- Routes
  - Lecture guide: `/courses/:slug/guide`
  - Slide deck: `/courses/:slug`
- The lecture guide page includes:
  - chapter outline
  - estimated study time and difficulty
  - target audience and prerequisites
  - links to practice assets and supporting documents
- Practice assets live under `public/example/<course-slug>/`.
  - Examples: `public/example/cusdis/`, `public/example/cms-architecture/`, `public/example/vibe-coding-masterclass/`
  - Korean and English Markdown examples are both provided, and the site links to the matching file based on the current locale.

## Development environment

- Node.js: 20.19+ or 22.12+
- Install: `npm install`
- Dev server: `npm run dev`
- Production build: `npm run build`
