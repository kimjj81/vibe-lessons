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

## 읽는 포인트

- GitHub Release가 기준 저장소인지
- homepage repo가 소비자 역할만 하는지
- publish 이전과 이후의 책임이 분리되어 있는지
