# React Frontend Decisions

Use this file when choosing frontend tools for React web projects.

Korean note: React 웹 프로젝트의 프론트엔드 도구를 선택할 때 이 문서를 따른다.

## Default Choices

Use these defaults for new React web projects unless the user requests otherwise:

- Server state and cache: TanStack Query.
- Client global state: Zustand only when global client state is needed.
- Local state: React state, reducer, and local hooks.
- Forms: React Hook Form.
- Styling: Tailwind CSS.
- Icons: Font Awesome with React bindings.
- Admin, dashboard, CRUD, table-heavy, or form-heavy UI: Ant Design.
- Highly custom consumer-facing UI: Tailwind CSS with project-specific components.
- CSS-in-JS: avoid styled-components unless the existing project uses it or the user requests it.

Korean note: React 웹 기본 조합은 TanStack Query, 필요 시 Zustand, React Hook Form, Tailwind CSS, Font Awesome, 업무형 UI의 Ant Design이다.

## State Management

- Use React local state for component-only behavior.
- Use router search params for URL state.
- Use TanStack Query for server state and caching.
- Use Zustand only for cross-screen client state.
- Use Redux Toolkit only when the project already uses Redux or the user explicitly requests it.

Korean note: 서버 상태는 TanStack Query, 전역 클라이언트 상태는 필요할 때만 Zustand를 사용한다.

## Styling And UI

- Use Tailwind CSS as the default styling system.
- Use Ant Design for admin, dashboard, CRUD, table-heavy, and form-heavy applications.
- Do not force Ant Design on highly custom consumer-facing UI.
- Use styled-components only when the existing project already uses it or the user explicitly requests CSS-in-JS.

Korean note: Tailwind CSS를 기본으로 사용하고, 관리자/업무형 화면에는 Ant Design을 사용한다.

## Icons

Use Font Awesome for React web icons.

Korean note: React 웹 아이콘은 Font Awesome을 사용한다.

Recommended packages:

- `@fortawesome/fontawesome-svg-core`
- `@fortawesome/free-solid-svg-icons`
- `@fortawesome/react-fontawesome`

Korean note: React 웹에서는 Font Awesome React 패키지를 사용한다.

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

Before scaffolding a new React web project, report:

- Styling approach
- UI library
- Server state tool
- Client state tool
- Form library
- Icon library
- Reason for each choice

Korean note: 신규 React 웹 프로젝트 생성 전 스타일링, UI, 상태 관리, 폼, 아이콘 도구와 선택 이유를 보고한다.
