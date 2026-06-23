# Frontend Styling And UI Rules

Use these rules when choosing styling systems and UI libraries.

Korean note: ???? ???? UI ?????? ??? ? ? ??? ???.

## Existing Projects

Before adding a new styling or UI tool, inspect the existing dependencies, component patterns, and styling conventions.

Korean note: ? ???? ?? UI ??? ???? ?? ?? ???, ???? ??, ???? ??? ????.

Follow the existing styling system unless the user explicitly asks to change it.

When the harness is introduced after project code already exists, match the existing design elements instead of applying the default stack choices blindly.

Korean note: 프로젝트 코드가 이미 있는 상태에서 하네스를 도입한 경우 기본 스택 선택을 그대로 강요하지 말고 기존 디자인 요소를 따른다.

Inspect and reuse:

- Existing design tokens
- Existing shared components
- Existing layout primitives
- Existing form, table, modal, and navigation patterns
- Existing icon style and icon library
- Existing responsive behavior

Korean note: 기존 디자인 토큰, 공통 컴포넌트, 레이아웃, 폼, 테이블, 모달, 내비게이션, 아이콘, 반응형 방식을 확인하고 재사용한다.

If the existing project conflicts with the harness default, preserve the existing project choice and mention the conflict in the work report.

Korean note: 기존 프로젝트 선택과 하네스 기본값이 충돌하면 기존 선택을 유지하고 작업 보고에 충돌 내용을 남긴다.

Korean note: ???? ??? ???? ?? ? ?? ???? ???? ????.

## Stack Rules

Use the styling system and UI library defined by the active stack's `decisions.md`.

Korean note: ???? ??? UI ?????? ?? ??? `decisions.md` ??? ???.

- React web: `.codex/stacks/react/decisions.md`
- Expo: `.codex/stacks/expo/decisions.md`
- React Native: `.codex/stacks/react-native/decisions.md`

Korean note: React ?, Expo, React Native? ?? ?? ?? UI ?? ??? ????.

## CSS-In-JS

Use CSS-in-JS tools such as styled-components only when:

- The existing project already uses styled-components.
- The user explicitly requests CSS-in-JS.
- A third-party integration requires it.

Korean note: styled-components? ?? ????? ?? ???? ???? ??? ???? ????.

## Web-Only UI

Do not use web-only UI libraries such as Ant Design in Expo or React Native unless a compatible native package is explicitly selected.

Korean note: Expo ?? React Native??? ???? ???? ???? ????? ???? ?? ? ? ?? UI ?????? ???? ???.
