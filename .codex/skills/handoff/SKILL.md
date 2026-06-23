---
name: handoff
description: Use only when the user explicitly invokes "/handoff" or "$handoff" to create a handoff summary that another Codex session can continue from. Do not use for general coding tasks.
---

# Handoff

Create a continuation-focused handoff summary and save it as a new workflow file.

Korean note: 다음 Codex 세션이 이어서 작업할 수 있는 인수인계 요약을 저장한다.

## Output Location

Always create a new Markdown file:

```text
.codex/workflow/handoff/YYYYMMDD-HHMMSS-handoff.md
```

Do not overwrite existing files.

Korean note: 기존 파일을 덮어쓰지 않고 timestamp 파일로 계속 쌓는다.

## Content

Include:

- Goal and current status
- Important decisions already made
- Files changed or likely relevant
- Commands already run and their results
- Known risks or unresolved questions
- Next recommended action

Optimize for a fresh Codex session. Prefer concrete file paths, commands, commit hashes, and exact status.
