# CMS 구현 체크리스트

- 먼저 하나의 핵심 패턴을 정합니다: Monolithic, Headless, Hybrid, Self-hosted 기능 조합
- 도구보다 먼저 최소 콘텐츠 엔티티를 정의합니다.
- 누가 draft, review, publish, rollback 할 수 있는지 정합니다.
- publish 후 어떤 일이 일어나는지 적습니다: 캐시 무효화, 재검증, 검색 인덱싱, 분석 반영
- 미디어 업로드 실패, 롤백, 댓글 승인 실패 시 대응 경로를 적습니다.
- 외부 서비스는 꼭 필요한 것부터만 붙입니다.
