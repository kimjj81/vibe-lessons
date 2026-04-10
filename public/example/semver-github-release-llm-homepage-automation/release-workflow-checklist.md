# release workflow checklist

## before you automate

- Lock the stable / beta / rc regex rules first
- Create releases as drafts before any public publish step
- Block accidental mutation of already-published releases by default
- Allow recovery only through `workflow_dispatch` plus an explicit flag

## before publish

- Regenerate notes before final publication
- Constrain LLM polishing so it cannot invent new facts
- Write the final title/body back into GitHub Release
