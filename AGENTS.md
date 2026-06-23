# Project Agent Guide

Always read the project harness documents before making changes.

Korean note: 작업 전 아래 하네스 문서를 먼저 확인한다.

## Reporting Rules

Follow the reporting workflow for work start, progress updates, and completion reports.

Korean note: 작업 시작, 진행, 완료 보고는 보고 규칙을 따른다.

- `.codex/common/rules/report.md`

## Project Context

Read the project description before making implementation decisions.

Korean note: 구현 판단 전에 프로젝트 설명을 확인한다.

- `.codex/context/description.md`

## Common Rules

Use the shared rules for comments, reporting, and general coding conventions.

Korean note: 공통 규칙은 코드 작성과 보고 방식의 기준이다.

- `.codex/common/rules`
- TypeScript only: `.codex/common/rules/typescript.md`
- Version selection: `.codex/common/rules/versioning.md`
- Frontend decisions: `.codex/common/rules/frontend-decisions.md`

## Stack Rules

Apply stack-specific rules when the project uses that stack.

Korean note: React 또는 Expo 작업이면 해당 스택 문서를 추가로 따른다.

- React: `.codex/stacks/react/react.md`
- Expo: `.codex/stacks/expo/expo.md`
- React Native: `.codex/stacks/react-native/react-native.md`

## Work Patterns

Use the shared patterns when organizing code.

Korean note: 코드 구조화와 분리 기준은 패턴 문서를 따른다.

- Component separation: `.codex/common/patterns/component.md`

## Design Rules

Use the shared design rules and stack-specific design rules when building UI.

Korean note: UI를 만들 때 공통 디자인 규칙과 스택별 디자인 규칙을 함께 따른다.

- Principles: `.codex/common/design/principles.md`
- Layout: `.codex/common/design/layout.md`
- Interaction: `.codex/common/design/interaction.md`
- React: `.codex/stacks/react/design.md`
- Expo: `.codex/stacks/expo/design.md`
- React Native: `.codex/stacks/react-native/design.md`
