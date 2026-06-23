# React Rules

Use these rules when working in React projects.

Korean note: React 프로젝트 작업 시 이 규칙을 따른다.

## Structure

- Keep route-level screens separate from reusable components.
- Move repeated UI into `components/`.
- Move feature-specific UI, hooks, services, constants, and types into `features/<feature-name>/`.
- Keep API calls outside presentational components.

Korean note: 화면, 재사용 컴포넌트, 기능별 로직을 명확히 분리한다.

## Components

- Prefer small components with clear inputs and outputs.
- Keep business logic in hooks or services when possible.
- Avoid mixing data fetching, state orchestration, and large JSX in one component.

Korean note: 컴포넌트는 UI 책임에 집중하고 복잡한 로직은 훅이나 서비스로 분리한다.

## Frontend Decisions

Follow `.codex/common/rules/frontend-decisions.md` and `.codex/stacks/react/decisions.md` before choosing state management, UI libraries, or styling tools.

Korean note: 상태 관리, UI 라이브러리, 스타일링 도구를 선택하기 전에 프론트엔드 의사결정 규칙을 따른다.

## Design

Follow `.codex/stacks/react/design.md` when designing React web UI.

Korean note: React 웹 UI를 설계할 때 React 디자인 규칙을 따른다.

## Version Selection

Follow `.codex/common/rules/versioning.md` before creating or upgrading a React project.

Korean note: React 프로젝트 생성 또는 업그레이드 전 버전 선택 규칙을 따른다.

For new React web projects, report the selected Node.js, package manager, React, TypeScript, and build tool versions before scaffolding.

Korean note: 신규 React 웹 프로젝트 생성 전 Node.js, 패키지 매니저, React, TypeScript, 빌드 도구 버전을 보고한다.

## Verification

Run the project's available checks after changes.

Korean note: 수정 후 프로젝트에 정의된 검사 명령을 실행한다.
