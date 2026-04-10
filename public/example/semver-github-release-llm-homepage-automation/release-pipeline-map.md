# release pipeline map

```text
git tag vX.Y.Z
  -> tag_gate
  -> draft GitHub Release
  -> asset upload / generated notes
  -> optional LLM polishing
  -> publish stable release
  -> workflow_dispatch to homepage repo
  -> import release body into Astro content
  -> Astro build / deploy
```

## What to look for

- Whether GitHub Release is the canonical source
- Whether the homepage repo stays a consumer instead of a second editor
- Whether the responsibilities before and after publish remain clearly split
