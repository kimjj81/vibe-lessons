[![Korean](https://img.shields.io/badge/lang-ko-blue.svg)](./README.md) [![English](https://img.shields.io/badge/lang-en-lightgrey.svg)](./README.en.md)

# 바이브 코딩 강의 리포지토리

바이브 코딩 강의를 지원하려고 강의 자료를 작성하다가, 이미 모집이 마감되어 작성하던 내용을 일단 올려두는 기록입니다.

참고로 클로드에서 공개한 공식 강의도 확인할 수 있습니다. 방법은 하나가 아니라 여러 가지가 있을수록 좋을 것 같아서, 공식 자료를 보면서도 별도로 정리해 둔 형태입니다.

- 전체 강의: https://www.anthropic.com/learn
- Claude Code 초급: https://anthropic.skilljar.com/claude-code-in-action

바이브 코딩 프로젝트다 보니 실제로는 AI를 사용해서 거의 다 만들었고, 그 과정에서 부족한 점이 꽤 보여 계속 수정할 부분이 있습니다.  
최종 정리본을 계속 다듬어갈 예정입니다.

현재 미리보기: https://lesson.studiojin.dev

## 현재 공개 강좌

- `바이브 코딩 실전 마스터클래스`
  - 아이디어를 MVP로 압축해 설계, 구현, 검증, 배포까지 연결하는 강의입니다.
  - AI 코딩 도구를 프로젝트 전체 작업 루프로 쓰는 방법, AGENTS/PRD 문서화, 스택 결정, 비용/보안 판단을 다룹니다.
- `Cusdis 자동화`
  - n8n, Gemini, Cusdis를 연결해 댓글 승인과 스팸 필터링을 자동화하는 실전 강의입니다.
  - webhook 연결, JSON 계약 기반 AI 판정, JS 후처리, 승인 API 호출, 운영 체크리스트를 포함합니다.
- `CMS & 콘텐츠 인프라`
  - Monolithic CMS, Headless CMS, SaaS Embed, Self-hosted를 서비스 운영 관점에서 비교하는 강의입니다.
  - 콘텐츠 모델, 권한, 캐시 무효화, 댓글/검색/분석 기능을 어떤 조합으로 가져갈지 설계 기준을 설명합니다.
- `SemVer Release 자동화`
  - SemVer 태그에서 GitHub Release를 만들고, generated notes와 선택적 LLM polishing을 거쳐 홈페이지에 자동 반영하는 강의입니다.
  - draft release 전략, cross-repo dispatch, Astro import, end-to-end 검증 체크리스트를 함께 다룹니다.

## 강좌 상세 페이지와 예제 자료

- 강좌 목록에서 바로 슬라이드로만 들어가는 대신, 각 강좌에는 별도 소개 페이지가 있습니다.
- 경로
  - 상세강의자료: `/courses/:slug/guide`
  - 슬라이드 덱: `/courses/:slug`
- 상세강의자료 페이지에는 다음 정보가 들어 있습니다.
  - 챕터 목차
  - 예상 수강 시간 / 난이도
  - 준비물과 추천 수강 대상
  - 실습 예제 및 문서 링크
- 실습 자료는 `public/example/<course-slug>/` 아래에 두었습니다.
  - 예: `public/example/cusdis/`, `public/example/cms-architecture/`, `public/example/vibe-coding-masterclass/`
  - 한국어/영어 Markdown 예제를 함께 제공하며, 사이트 로케일에 따라 맞는 파일로 연결됩니다.

## 개발 환경

- Node.js: 20.19+ 또는 22.12+
- 설치: npm install
- 개발 서버: npm run dev
- 프로덕션 빌드: npm run build
