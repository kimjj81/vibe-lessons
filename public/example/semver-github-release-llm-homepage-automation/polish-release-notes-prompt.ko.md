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

## 체크 포인트

- generated notes가 원문 source인지
- 사용자-facing 문체로만 다듬는지
- 실패 시 generated notes로 fallback할지 중단할지 정책이 있는지
