# homepage sync checklist

## dispatch

- published stable release만 homepage workflow를 깨우는가
- dispatch token이 대상 homepage repo에만 묶여 있는가

## import

- import script가 draft / prerelease / unpublished release를 거부하는가
- Astro content 경로에 `<tag>.md`가 생성되는가

## verification

- `gh release view`에서 최종 title/body를 확인했는가
- homepage build가 성공했는가
- 제품 페이지에서 최신 release가 보이는가
- 같은 tag로 다시 실행했을 때 no-op로 끝나는가
