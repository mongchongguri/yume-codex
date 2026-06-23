# Frontend Decision Rules

Use this file as the index for frontend tool decisions.

Korean note: ????? ?? ?? ??? ???? ? ??? ????.

## Core Rule

Follow the existing project choices unless the user explicitly asks to change them.

Korean note: ?? ????? ???? ??? ???? ?? ? ?? ??? ????.

Do not mix multiple tools for the same responsibility without a clear reason.

When adding this harness to an existing project, treat the existing codebase as the source of truth for frontend decisions.

Korean note: 기존 프로젝트에 하네스를 추가한 경우 프론트엔드 의사결정은 기존 코드베이스를 기준으로 한다.

Korean note: ?? ??? ??? ??? ?? ?? ?? ? ?? ???.

## Common Decision Files

- State management: `.codex/common/rules/frontend/state.md`
- Styling and UI libraries: `.codex/common/rules/frontend/styling-ui.md`
- Icons: `.codex/common/rules/frontend/icons.md`
- Decision reporting: `.codex/common/rules/frontend/reporting.md`

Korean note: ?? ??, ????/UI, ???, ?? ??? ??? ??? ???.

## Stack-Specific Defaults

Use the stack-specific `decisions.md` file as the source of truth for default frontend tools.

Korean note: ?? ????? ?? ??? ? ??? `decisions.md`? ???? ??.

- React web: `.codex/stacks/react/decisions.md`
- Expo: `.codex/stacks/expo/decisions.md`
- React Native: `.codex/stacks/react-native/decisions.md`
