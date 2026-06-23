---
name: summary
description: Use only when the user explicitly invokes "/summary" or "$summary" to summarize the current conversation context, decisions, open questions, and next steps. Do not use for general coding tasks.
---

# Summary

Create a concise conversation summary and save it as a new workflow file.

Korean note: 현재 대화 맥락을 요약하고 workflow 파일로 저장한다.

## Output Location

Always create a new Markdown file:

```text
.codex/workflow/summary/YYYYMMDD-HHMMSS-summary.md
```

Do not overwrite existing files.

Korean note: 기존 파일을 덮어쓰지 않고 timestamp 파일로 계속 쌓는다.

## Content

Include:

- User goals and preferences
- Decisions made in the conversation
- Completed work
- Open questions
- Next steps

Use only visible context. Do not invent missing decisions, commands, or results.
