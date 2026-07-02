# Component Separation Pattern

Use this pattern when organizing React or Expo projects.


## Core Principle

Each component should have one clear responsibility.


Separate full screens from reusable UI pieces and feature-specific logic.


## Recommended Layers

- `screen` or `page`: route-level screens
- `component`: reusable UI pieces
- `feature`: domain-specific UI and logic
- `hook`: stateful or reusable logic
- `service` or `api`: server communication
- `constant`: options, menus, and configuration values
- `type`: shared data shapes


## When To Split

Consider splitting when:

1. JSX becomes long or hard to scan.
2. The same UI structure appears more than once.
3. A section owns meaningful local state.
4. A section should be testable in isolation.
5. A popup, modal, list card, filter, search header, or input area is self-contained.
6. A screen handles API calls, state management, and UI rendering in one file.
7. A file grows beyond roughly 200 to 300 lines.


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
