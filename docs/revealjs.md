# reveal.js 조사 및 도입 메모

이 문서는 `reveal.js` 도입 준비를 위해 공식 문서를 AI가 빠르게 참조할 수 있도록 압축한 메모다.

## 수집 범위

- 수집일: `2026-04-11`
- 문서 출처: [revealjs.com](https://revealjs.com), [hakimel/reveal.js](https://github.com/hakimel/reveal.js)
- 수집 기준: `https://revealjs.com` 접속 후 문서 내비게이션 `XPath /html/body/div/div/div[1]/div/nav`
- 순회 결과:
  - 내비게이션에서 확인한 내부 문서 페이지 전부 순회
  - 언어 선택용 `/en/`, `/zh-Hant/`도 확인
  - 실제 압축은 영어 기준 내부 문서 39개에 대해 수행
- 외부 링크:
  - 플러그인/도구 위키
  - GitHub releases changelog
  - Slides.com 소개 링크

## 이 저장소에 대한 결론

이 저장소는 강의자료를 웹페이지로 제공하는 Astro + React 기반 사이트다. 슬라이드 전용 경로에 `reveal.js`를 도입하는 것은 구조적으로 잘 맞는다. 특히 현재 커스텀 구현으로 들고 있는 키보드 이동, 터치 이동, 점프 이동, 슬라이드 번호, 발표자 뷰, PDF 출력, 개요 모드, 스크롤 뷰는 reveal.js 내장 기능으로 대부분 대체 가능하다.

이 저장소에는 `@revealjs/react` 경로가 가장 자연스럽다. 강의 목록/가이드/상세 페이지는 Astro 라우팅을 유지하고, 실제 슬라이드 덱 경로만 React island 또는 React 렌더 루트에서 `Deck`으로 마운트하는 방식이 적합하다.

## 도입 권장안

- 라우팅은 유지하고 슬라이드 렌더러만 교체한다.
- 각 슬라이드를 React 컴포넌트로 유지하되 reveal.js의 `Slide`, `Stack`, `Fragment` 조합으로 감싼다.
- 기존 커스텀 네비게이션 로직은 점진적으로 제거한다.
- 헤더, 로케일 토글, 예제 링크, 강의 연락처 같은 오버레이는 reveal deck 바깥 레이어에 두는 편이 안전하다.
- 스크롤이 필요한 카드/패널에는 `data-prevent-swipe`를 붙여 reveal의 터치 네비게이션과 충돌하지 않게 한다.
- 발표용 기본 뷰와 읽기용 scroll view를 병행하는 전략이 좋다.

## React 기준 최소 시작점

공식 React 래퍼는 `@revealjs/react`다. 공식 문서 기준으로 `Deck`은 mount 시 reveal 인스턴스를 만들고 unmount 시 destroy 한다. `config`는 shallow compare 후 `reveal.configure()`로 반영되고, `plugins`는 첫 mount 시점에만 읽힌다.

```tsx
import { Deck, Slide, Stack, Fragment } from '@revealjs/react';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';

import RevealHighlight from 'reveal.js/plugin/highlight';
import RevealMarkdown from 'reveal.js/plugin/markdown';
import RevealNotes from 'reveal.js/plugin/notes';
import RevealSearch from 'reveal.js/plugin/search';

export function CoursePresentation() {
  return (
    <Deck
      config={{
        width: 1280,
        height: 720,
        hash: true,
        respondToHashChanges: true,
        jumpToSlide: true,
        controls: true,
        progress: true,
        slideNumber: 'c/t',
        touch: true,
        overview: true,
        transition: 'slide',
        autoAnimate: true,
      }}
      plugins={[RevealHighlight, RevealMarkdown, RevealNotes, RevealSearch]}
    >
      <Slide>
        <h1>Intro</h1>
      </Slide>

      <Stack>
        <Slide>Vertical 1</Slide>
        <Slide>Vertical 2</Slide>
      </Stack>

      <Slide>
        <Fragment as="p">Step 1</Fragment>
        <Fragment as="p">Step 2</Fragment>
      </Slide>
    </Deck>
  );
}
```

## 이 저장소에 맞는 reveal.js 설계 규칙

- 슬라이드 라우트만 reveal.js로 전환한다.
- 코스 메타데이터와 로케일 라우팅은 기존 구조를 유지한다.
- reveal이 제공하는 기능은 재구현하지 않는다.
- 강의자료는 내용이 먼저고 애니메이션은 보조 수단이다.
- 발표 뷰와 읽기 뷰를 분리해서 생각한다.
- 내부 스크롤은 reveal 기본 swipe와 충돌하므로 `data-prevent-swipe`를 명시적으로 써야 한다.
- 문서형 강의에는 `view=scroll` 공유 전략이 유용하다.

## 현재 저장소에서 바로 유용한 reveal 기능

- `@revealjs/react`: 현재 React 슬라이드 컴포넌트를 비교적 자연스럽게 옮길 수 있다.
- `Stack`: 현재 강의 구조에서 optional depth나 보조 슬라이드를 vertical stack으로 묶기 좋다.
- `Fragment`: bullet reveal, 비교표 단계 공개, 순차 데모에 적합하다.
- `Auto-Animate`: 인접 슬라이드 간 차분 애니메이션에 강하다.
- `Speaker View`: 발표자 노트, 다음 슬라이드 미리보기, 타이머 제공.
- `PDF Export`: 인쇄형 배포본 생성.
- `Overview Mode`: 전체 강의 구성 점검과 발표 중 탐색에 유용하다.
- `Jump to Slide`: 대형 덱에서 빠른 이동.
- `Scroll View`: 수강자용 읽기 페이지 대체재로 유용하다.

## 추천 기본 설정

전체 화면 슬라이드 전용 경로라면 아래 항목부터 검토하면 된다.

- `hash: true`
- `respondToHashChanges: true`
- `jumpToSlide: true`
- `controls: true`
- `progress: true`
- `slideNumber: 'c/t'`
- `touch: true`
- `overview: true`
- `navigationMode: 'default'`
- `autoAnimate: true`
- `fragmentInURL: true`
- `showNotes: false`

다음 항목은 조건부다.

- `embedded: true`
  - 슬라이드가 viewport 전체를 쓰지 않고 페이지 일부에 들어갈 때만
- `keyboardCondition: 'focused'`
  - `embedded: true`일 때 권장
- `center: false`
  - 슬라이드 레이아웃을 직접 고정 배치할 때 검토
- `disableLayout: true`
  - reveal의 스케일링/센터링보다 직접 CSS 제어가 우선일 때만
- `view: 'scroll'`
  - 읽기 전용 페이지나 공유 링크에서 사용

## 마이그레이션 체크리스트

1. 슬라이드 라우트에서만 `Deck`을 마운트한다.
2. 현재 슬라이드 컴포넌트를 `Slide` 단위로 감싼다.
3. optional/보조 슬라이드는 `Stack`으로 재구성한다.
4. 현재 수동 구현한 키보드/휠/터치/드래그 네비게이션을 제거한다.
5. 오버레이 UI는 reveal 바깥 레이어로 분리한다.
6. 내부 스크롤 요소마다 `data-prevent-swipe` 필요 여부를 점검한다.
7. 발표자 노트와 PDF 출력 정책을 정한다.
8. 읽기용 `scroll view`를 별도 query param 또는 별도 route로 제공할지 결정한다.
9. 기존 deep link가 필요하면 `hash` 기반 슬라이드 링크 정책을 정한다.
10. custom CSS가 reveal 기본 레이아웃과 충돌하는지 점검한다.

## 페이지별 압축 메모

### Foundations

- [Installation](https://revealjs.com/installation/)
  - 설치 경로는 basic, full, npm 세 가지다.
  - 외부 Markdown 같은 일부 기능은 로컬 웹서버가 필요하다.
  - npm 경로는 패키지 의존성으로 프로젝트에 통합할 때 적합하다.
- [React](https://revealjs.com/react/)
  - 공식 React 래퍼는 `@revealjs/react`다.
  - `Deck`, `Slide`, `Stack`, `Fragment`, `useReveal`, `deckRef`, 이벤트 props를 제공한다.
  - `plugins`는 초기화 시점 전용, `config`는 이후 `configure()`로 반영된다.
- [Markup](https://revealjs.com/markup/)
  - 기본 구조는 `.reveal > .slides > section`.
  - 중첩 `section`은 vertical stack이 된다.
  - `data-state`로 슬라이드 상태 기반 CSS hook을 만들 수 있다.
- [Markdown](https://revealjs.com/markdown/)
  - built-in Markdown plugin 사용.
  - inline Markdown과 external Markdown 둘 다 지원.
  - separator, notes separator, slide/element attribute 주석 문법을 지원한다.

### Content Authoring

- [Backgrounds](https://revealjs.com/backgrounds/)
  - `data-background`로 color, gradient, image, video, iframe, parallax 지원.
- [Media](https://revealjs.com/media/)
  - video/audio/iframe autoplay와 lazy loading 지원.
  - 글로벌 `autoPlayMedia`, `preloadIframes` 옵션으로 제어 가능.
- [Lightbox](https://revealjs.com/lightbox/)
  - 이미지/비디오/iframe를 overlay lightbox로 표시 가능.
  - 썸네일 확대형 강의자료에 적합하다.
- [Code](https://revealjs.com/code/)
  - highlight plugin 기반.
  - 코드 블록 trim, line highlight, step-by-step highlight, 언어 지정 지원.
- [Math](https://revealjs.com/math/)
  - Math plugin으로 KaTeX 또는 MathJax 사용 가능.
  - Markdown 안의 수식도 처리 가능.
- [Fragments](https://revealjs.com/fragments/)
  - `.fragment`와 순서 지정으로 순차 공개 가능.
  - custom fragment effect CSS도 정의 가능.
- [Links](https://revealjs.com/links/)
  - `#/slide-id`, `#/h/v` 링크와 relative navigation link 지원.
- [Layout](https://revealjs.com/layout/)
  - `r-stack`, fit text, stretch, frame 등 helper 제공.
  - 슬라이드 안쪽 구성에만 쓰고 전체 덱 구조와 혼동하지 말 것.
- [Slide Visibility](https://revealjs.com/slide-visibility/)
  - `data-visibility="hidden"` 또는 uncounted slide 지원.
  - 시간 부족 시 생략할 보조 슬라이드에 유용하다.

### Visual Customization

- [Themes](https://revealjs.com/themes/)
  - 기본 theme stylesheet 제공.
  - theme 변수는 CSS custom properties로 노출된다.
- [Transitions](https://revealjs.com/transitions/)
  - deck 전역 또는 slide별 `data-transition` 설정 가능.
  - in/out을 다르게 줄 수도 있다.
- [Configuration Options](https://revealjs.com/config/)
  - controls, progress, slideNumber, hash, history, keyboard, overview, touch, rtl, navigationMode, fragments, embedded, help, pause, showNotes, autoPlayMedia, autoAnimate, view 등 핵심 옵션 집합.
- [Presentation Size](https://revealjs.com/presentation-size/)
  - authoring size를 기준으로 uniform scale 된다.
  - `center`, `embedded`, width/height 관련 옵션을 여기서 판단한다.

### Delivery Features

- [Vertical Slides](https://revealjs.com/vertical-slides/)
  - 상위 horizontal slide 안에 vertical stack을 둘 수 있다.
  - optional depth나 appendix 구조에 적합하다.
- [Auto-Animate](https://revealjs.com/auto-animate/)
  - 인접 slide에 `data-auto-animate`를 붙여 자동 diff animation.
  - DOM 순서, 텍스트, `src`, element identity를 기준으로 매칭한다.
- [Auto-Slide](https://revealjs.com/auto-slide/)
  - `autoSlide` ms 단위.
  - 사용자 상호작용 시 pause, `A` 키, autoplay control 지원.
- [Speaker View](https://revealjs.com/speaker-view/)
  - Notes plugin 기반.
  - `S` 키로 열고 타이머/다음 슬라이드 미리보기를 제공.
  - notes는 `<aside class="notes">` 또는 `data-notes`.
- [Scroll View](https://revealjs.com/scroll-view/)
  - `view: 'scroll'` 또는 query string `?view=scroll`.
  - horizontal/vertical 구분 없이 authored order대로 linear reading flow가 된다.
  - 발표 뷰와 읽기 뷰를 분리하는 데 핵심 기능이다.
- [Slide Numbers](https://revealjs.com/slide-numbers/)
  - `slideNumber: true | 'h.v' | 'h/v' | 'c' | 'c/t' | custom function`.
- [Jump to Slide](https://revealjs.com/jump-to-slide/)
  - 숫자 또는 slide id로 점프.
  - 대형 강의 덱 운영에 유용하다.
- [Touch Navigation](https://revealjs.com/touch-navigation/)
  - 기본 swipe navigation 제공.
  - 스크롤 가능한 내부 요소는 `data-prevent-swipe`로 보호.
- [PDF Export](https://revealjs.com/pdf-export/)
  - Chrome/Chromium 기준 print stylesheet 기반.
  - `showNotes`, `pdfMaxPagesPerSlide`, `pdfSeparateFragments` 조정 가능.
  - CLI가 필요하면 decktape도 대안이다.
- [Overview Mode](https://revealjs.com/overview/)
  - 전체 슬라이드를 bird's-eye view로 탐색하는 모드.
- [Fullscreen](https://revealjs.com/fullscreen/)
  - `F` 키로 fullscreen, `ESC`로 종료.

### Runtime/API

- [Initialization](https://revealjs.com/initialization/)
  - `Reveal.initialize()`는 promise를 반환한다.
  - 여러 덱을 한 페이지에 둘 수 있지만 그 경우 `embedded: true`와 explicit sizing이 필요하다.
- [API](https://revealjs.com/api/)
  - `slide`, `left/right/up/down`, `prev/next`, fragment 이동, `sync`, `layout`, `getConfig`, `getIndices`, `getProgress`, `getSlideNotes` 등 제공.
- [Events](https://revealjs.com/events/)
  - ready, slidechanged, fragmentshown/hidden, overviewshown/hidden, paused/resumed 등.
  - React wrapper에서는 event props로 연결 가능.
- [Keyboard](https://revealjs.com/keyboard/)
  - key code별 action override 가능.
  - 런타임에 add/remove 가능.
- [Presentation State](https://revealjs.com/presentation-state/)
  - `getState()`로 현재 위치와 상태 snapshot을 가져와 저장/복원 가능.
- [postMessage API](https://revealjs.com/postmessage/)
  - iframe 또는 다른 window에서 slide 제어 가능.
  - 이벤트 bubbling과 callback response도 제공.

### Extensibility

- [Plugins](https://revealjs.com/plugins/)
  - 플러그인은 script import 후 `plugins` 배열에 등록한다.
  - built-in plugin:
    - `RevealHighlight`
    - `RevealMarkdown`
    - `RevealSearch`
    - `RevealNotes`
    - `RevealMath`
    - `RevealZoom`
- [Creating a Plugin](https://revealjs.com/creating-plugins/)
  - plugin object spec과 async plugin 패턴 제공.
  - 여러 presentation instance를 고려해 factory function으로 만드는 예제가 나온다.
- [Multiplex](https://revealjs.com/multiplex/)
  - 청중 장치 동기화용.
  - core에서 분리되어 별도 저장소로 이동했다.

### Maintenance

- [Upgrading](https://revealjs.com/upgrading/)
  - 6.0에서 build/dev server가 Vite 기반으로 변경.
  - npm import는 `dist/` prefix 없이 top-level package path를 써야 한다.
  - ES module suffix는 `.esm.js`에서 `.mjs`로 변경.
  - `@types/reveal.js`는 제거 가능하다.
- [React (Manual Setup)](https://revealjs.com/react-legacy/)
  - 공식 wrapper 없이 수동 초기화하는 예전 방식.
  - 이 저장소에서는 특별한 이유가 없으면 우선순위가 낮다.

## 이 저장소에 대한 최종 판단

도입 방향은 `@revealjs/react`가 맞다. 현재 저장소는 이미 React slide component가 있고, Astro가 페이지 routing과 chrome을 맡고 있으므로 역할 분리가 깔끔하다. reveal.js는 이 저장소가 지금 직접 구현하고 있는 deck runtime을 대체하고, `draft/`와 `public/example/`은 그대로 유지하면 된다.

기술적으로 가장 중요한 주의점은 세 가지다.

- reveal built-in 기능과 현재 custom deck 로직을 중복 유지하지 말 것
- 내부 스크롤 영역은 `data-prevent-swipe`로 명시할 것
- npm 경로에서는 오래된 `dist/` import 경로를 쓰지 말 것

## 참고 링크

- 공식 문서: [https://revealjs.com](https://revealjs.com)
- GitHub 저장소: [https://github.com/hakimel/reveal.js](https://github.com/hakimel/reveal.js)
- 플러그인/도구 위키: [https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware](https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware)
- 릴리스: [https://github.com/hakimel/reveal.js/releases](https://github.com/hakimel/reveal.js/releases)
