# MVP 아키텍처 예시

## 예시: 식당 주문 MVP

```text
고객용 UI (Next.js)
  -> API routes / server actions
  -> Supabase (orders, tables, menu)
  -> 직원용 admin dashboard
```

## 먼저 검증할 것

- 고객이 주문을 끝까지 넣을 수 있는가?
- 직원이 주문 상태를 보고 바꿀 수 있는가?
- 운영자가 핵심 지표를 확인할 수 있는가?

## 왜 이 구조를 단순하게 두는가

- 하나의 프런트엔드 표면
- 하나의 데이터 백엔드
- 명확한 read/write 경계
- AI에게 설명하기 쉽고 수동 검증도 쉬움
