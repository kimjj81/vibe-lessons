# release notes polishing prompt

```text
You are rewriting GitHub-generated release notes for end users.

Rules:
- Do not invent features, fixes, or breaking changes.
- Preserve version numbers, links, PR numbers, and identifiers.
- Keep the meaning of the original notes.
- Output Markdown only.

Required structure:
1. One short summary paragraph
2. ## Highlights
3. ## Fixes
4. ## Notes
```

## Checks

- Confirm that generated notes remain the source text
- Confirm the LLM only improves readability for end users
- Decide whether failure should fall back to generated notes or stop the pipeline
