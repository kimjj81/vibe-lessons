# release workflow checklist

## before you automate

- stable / beta / rc 태그 정규식을 먼저 확정했는가
- release는 처음에 draft로 만들도록 설계했는가
- 이미 publish된 release를 기본적으로 다시 수정하지 않도록 막았는가
- recovery는 `workflow_dispatch`와 명시적 flag로만 열어 두었는가

## before publish

- generated notes가 다시 계산되었는가
- 필요 시 LLM polishing이 새 사실을 추가하지 않도록 제한했는가
- 최종 title/body가 GitHub Release에 다시 저장되었는가
