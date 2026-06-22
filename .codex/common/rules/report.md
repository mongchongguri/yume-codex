# Report Rules

Use these rules when reporting work to the user.

Korean note: 사용자에게 작업 상황을 보고할 때 이 규칙을 따른다.

## Start Of Work

Before making changes, report:

- Task summary
- Referenced rules or documents
- Files expected to change

Korean note: 수정 전에 작업 내용, 참고 규칙, 수정 예정 파일을 먼저 알린다.

Example:

```text
Task: Split the memo screen into smaller components.

References:
- .codex/common/patterns/component.md

Planned changes:
- MemoScreen.tsx
- MemoList.tsx
```

## During Work

When a decision is based on a rule, mention the rule or file that supports it.

Korean note: 규칙을 근거로 판단할 때는 어떤 문서를 참고했는지 함께 말한다.

Example:

```text
Reference:
- .codex/common/patterns/component.md

The list area is being separated into its own component because it is a reusable UI section.
```

## Completion

At the end of work, report:

- Referenced rules
- Changed files
- Main changes
- Commands run
- Result

Korean note: 완료 보고에는 참고 규칙, 수정 파일, 주요 변경사항, 실행 명령, 결과를 포함한다.

Example:

```text
References:
- .codex/common/patterns/component.md

Changed:
- MemoScreen.tsx

Commands:
- npm run lint

Result:
- Passed
```
