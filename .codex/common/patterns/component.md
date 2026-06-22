# Component Separation Pattern

Use this pattern when organizing React or Expo projects.

Korean note: React 또는 Expo 프로젝트에서 컴포넌트를 분리할 때 이 기준을 따른다.

## Core Principle

Each component should have one clear responsibility.

Korean note: 하나의 컴포넌트는 하나의 명확한 책임만 가진다.

Separate full screens from reusable UI pieces and feature-specific logic.

Korean note: 화면 단위, 재사용 UI, 기능 로직을 구분해서 분리한다.

## Recommended Layers

- `screen` or `page`: route-level screens
- `component`: reusable UI pieces
- `feature`: domain-specific UI and logic
- `hook`: stateful or reusable logic
- `service` or `api`: server communication
- `constant`: options, menus, and configuration values
- `type`: shared data shapes

Korean note: 역할별 폴더를 나누면 유지보수와 테스트가 쉬워진다.

## When To Split

Consider splitting when:

1. JSX becomes long or hard to scan.
2. The same UI structure appears more than once.
3. A section owns meaningful local state.
4. A section should be testable in isolation.
5. A popup, modal, list card, filter, search header, or input area is self-contained.
6. A screen handles API calls, state management, and UI rendering in one file.
7. A file grows beyond roughly 200 to 300 lines.

Korean note: 파일이 길어지거나 특정 영역이 독립적인 책임을 가지면 분리를 검토한다.

## Example Structure

```text
src/
  app/ or screens/
    HomeScreen.tsx

  features/
    memo/
      components/
        MemoList.tsx
        MemoCard.tsx
        MemoEditor.tsx
      hooks/
        useMemoList.ts
      services/
        memoService.ts
      constants/
        memo.constants.ts
      types/
        memo.types.ts

  components/
    common/
      Button.tsx
      Modal.tsx
      EmptyState.tsx
    layout/
      Header.tsx
      ScreenContainer.tsx

  hooks/
  services/
  constants/
  types/
```
