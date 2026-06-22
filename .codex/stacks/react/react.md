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

## Verification

Run the project's available checks after changes.

Korean note: 수정 후 프로젝트에 정의된 검사 명령을 실행한다.
