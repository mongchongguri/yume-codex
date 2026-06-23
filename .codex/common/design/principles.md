# Design Principles

Use these principles when designing application UI.

Korean note: 애플리케이션 UI를 설계할 때 이 원칙을 따른다.

## Fit The Product Type

Design for the product's actual use case.

Korean note: 제품의 실제 사용 목적에 맞는 디자인을 선택한다.

- Admin, CRM, SaaS, dashboards, and operational tools should feel quiet, dense, and easy to scan.
- Consumer, content, portfolio, and game experiences may be more expressive when appropriate.
- Do not turn tools into landing pages unless the user explicitly asks for a landing page.

Korean note: 업무형 도구는 스캔하기 쉽고 차분하게, 소비자형 경험은 필요할 때 더 표현적으로 만든다.

## Practical Visual Direction

- Prioritize clarity over decoration.
- Use visual hierarchy to guide scanning.
- Keep repeated UI predictable.
- Avoid decorative blobs, orbs, and unrelated background effects.
- Do not use one-note palettes dominated by a single hue family.

Korean note: 장식보다 명확성을 우선하고, 반복 UI는 예측 가능하게 만든다.

## Content First

- Real product, data, state, or workflow content should be visible early.
- Avoid placeholder-heavy screens when real structure can be shown.
- Empty states should explain what is missing and provide the next useful action.

Korean note: 실제 콘텐츠와 작업 흐름이 먼저 보이도록 구성한다.

## Consistency

- Reuse existing project components and spacing conventions.
- Match the active stack's UI and styling decisions.
- Do not introduce a new visual system when the project already has one.

Korean note: 기존 프로젝트의 컴포넌트와 간격, 스타일 기준을 우선한다.

## Existing Project Adoption

When this harness is added to an existing project, follow the project's current design system before applying new defaults.

Korean note: 기존 프로젝트에 하네스를 나중에 추가한 경우 새 기본값보다 현재 프로젝트의 디자인 시스템을 우선한다.

Inspect existing UI before designing new screens:

- Existing pages, screens, and layouts
- Shared components
- Button, input, modal, table, card, tab, and navigation patterns
- Color tokens, spacing, typography, radius, shadow, and icon style
- Existing styling library or component library
- Existing empty, loading, error, and success states

Korean note: 새 화면을 만들기 전에 기존 화면, 공통 컴포넌트, 색상, 간격, 타이포, 아이콘, 상태 표현 방식을 확인한다.

Do not replace the project's current visual direction just because this harness defines a default.

Korean note: 하네스 기본값이 있다는 이유만으로 기존 프로젝트의 시각 방향을 바꾸지 않는다.
