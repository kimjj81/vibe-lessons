# 바이브 코딩 강의 리포지토리

바이브 코딩 강의를 지원하려고 강의 자료를 작성하다가, 이미 모집이 마감되어 작성하던 내용을 일단 올려두는 기록입니다.

참고로 클로드에서 공개한 공식 강의도 확인할 수 있습니다. 방법은 하나가 아니라 여러 가지가 있을수록 좋을 것 같아서, 공식 자료를 보면서도 별도로 정리해 둔 형태입니다.

- 전체 강의: https://www.anthropic.com/learn
- Claude Code 초급: https://anthropic.skilljar.com/claude-code-in-action

바이브 코딩 프로젝트다 보니 실제로는 AI를 사용해서 거의 다 만들었고, 그 과정에서 부족한 점이 꽤 보여 계속 수정할 부분이 있습니다.  
최종 정리본을 계속 다듬어갈 예정입니다.

현재 미리보기: https://lesson.studiojin.dev

## Google Analytics(GA4) 설정

이 리포지토리에서는 Vite + React 환경에서 GA4를 동적으로 초기화해 라우트 이동 시 페이지뷰를 수집합니다.

사용자 동의 없이 GA 스크립트를 로드하지 않도록 맞춤형 동의 배너를 기본으로 적용했습니다.

Google Search Console 연동을 위해 다음 항목이 추가되었습니다.

- `public/sitemap.xml` (`npm run build` 시 자동 생성)
- `public/robots.txt` (`npm run build` 시 자동 생성)
- 경로 기반 메타 태그 자동 설정

1. .env.local 파일 생성

    cp .env.example .env.local

2. .env.local의 VITE_GA_MEASUREMENT_ID 값을 실제 측정 ID로 변경

    VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

3. 앱 실행

    npm run dev

4. Search Console 연동 체크리스트

- Cloudflare Pages에 배포 후 실제 도메인으로 `https://lesson.studiojin.dev/sitemap.xml` 접근 가능 확인
- `https://search.google.com/search-console`에서 도메인 소유권 인증
- 속성에 Sitemap 등록
- 커버리지, 수집 상태, URL 검사에서 `index` 상태 확인

필요한 환경변수

`VITE_SITE_BASE_URL`(선택): SEO canonical과 OG URL 기본값을 덮어쓸 때 사용

- `VITE_SITE_BASE_URL=https://lesson.studiojin.dev`

Cloudflare Pages production 환경변수에도 같은 `VITE_SITE_BASE_URL` 값을 넣어두면, canonical/OG/robots/sitemap이 모두 같은 기준 URL을 사용합니다.

환경변수가 비어 있으면 GA 스크립트가 자동으로 비활성화되어, 로컬에서 추적이 강제로 동작하지 않습니다.

## 개발 환경

- Node.js: 20.19+ 또는 22.12+
- 설치: npm install
- 개발 서버: npm run dev
- 프로덕션 빌드: npm run build
