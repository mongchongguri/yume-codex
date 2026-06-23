# Expo Frontend Decisions

Use this file when choosing frontend tools for Expo projects.

Korean note: Expo 프로젝트의 프론트엔드 도구를 선택할 때 이 문서를 따른다.

## Default Choices

Use these defaults for new Expo projects unless the user requests otherwise:

- Navigation: Expo Router for new route-based apps.
- Server state and cache: TanStack Query.
- Client global state: Zustand only when global client state is needed.
- Local state: React state, reducer, and local hooks.
- Forms: React Hook Form.
- Styling: NativeWind when a Tailwind-like workflow is desired; otherwise React Native StyleSheet with shared tokens.
- Icons: Font Awesome with React Native support.
- UI components: React Native Paper for standard mobile UI when a component library is needed.
- Web-only UI: do not use Ant Design by default.
- CSS-in-JS: avoid styled-components unless the existing project uses it or the user requests it.

Korean note: Expo 기본 조합은 Expo Router, TanStack Query, 필요 시 Zustand, React Hook Form, NativeWind 또는 StyleSheet, Font Awesome, 필요 시 React Native Paper이다.

## State Management

- Use React local state for component-only behavior.
- Use navigation or router params for route state.
- Use TanStack Query for server state and caching.
- Use Zustand only for cross-screen client state.
- Avoid Redux Toolkit unless the project already uses Redux or the user explicitly requests it.

Korean note: 서버 상태는 TanStack Query, 앱 전역 클라이언트 상태는 필요할 때만 Zustand를 사용한다.

## Styling And UI

- Use NativeWind only when a Tailwind-like workflow is desired.
- Use React Native StyleSheet with shared tokens when the UI should stay closer to native primitives.
- Use React Native Paper when a standard mobile component library is needed.
- Do not use web-only UI libraries such as Ant Design by default.

Korean note: Expo에서는 웹 전용 UI 라이브러리보다 NativeWind, StyleSheet, React Native Paper를 우선한다.

## Icons

Use Font Awesome for Expo icons.

Korean note: Expo 아이콘은 Font Awesome을 사용한다.

Recommended packages:

- `@fortawesome/fontawesome-svg-core`
- `@fortawesome/free-solid-svg-icons`
- `@fortawesome/react-native-fontawesome`
- `react-native-svg`

Korean note: Expo에서는 React Native용 Font Awesome 패키지와 `react-native-svg`를 사용한다.

Button icons should match the button action:

- Add or create: `faPlus`
- Save: `faFloppyDisk`
- Edit: `faPenToSquare`
- Delete: `faTrash`
- Search: `faMagnifyingGlass`
- Filter: `faFilter`
- Download: `faDownload`
- Upload: `faUpload`
- Settings: `faGear`
- Close or cancel: `faXmark`
- Back or previous: `faArrowLeft`
- Next or forward: `faArrowRight`

Korean note: 버튼 아이콘은 버튼 기능과 가장 가까운 Font Awesome 아이콘을 선택한다.

## Decision Report

Before scaffolding a new Expo project, report:

- Navigation approach
- Styling approach
- UI library
- Server state tool
- Client state tool
- Form library
- Icon library
- Reason for each choice

Korean note: 신규 Expo 프로젝트 생성 전 내비게이션, 스타일링, UI, 상태 관리, 폼, 아이콘 도구와 선택 이유를 보고한다.
