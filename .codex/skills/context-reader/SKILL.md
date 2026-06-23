---
name: context-reader
description: Use only when the user explicitly invokes "$context-reader", "/read-summary", "/read-worklog", or "/read-handoff", or explicitly asks to read the latest saved workflow summary, worklog, or handoff and continue from it. Do not use for general coding, debugging, implementation, or review tasks unless one of these read commands is requested.
---

# Context Reader

Read the latest saved workflow file and continue work from that context.

Korean note: 저장된 최신 workflow 파일을 읽고 해당 맥락에서 작업을 이어간다.

## Invocation Modes

Use the mode requested by the user:

- `/read-summary`: Read the latest file from `.codex/workflow/summary/`.
- `/read-worklog`: Read the latest file from `.codex/workflow/worklog/`.
- `/read-handoff`: Read the latest file from `.codex/workflow/handoff/`.
- `$context-reader`: Ask the user which workflow type they want to read if no mode is specified.

Korean note: 사용자가 요청한 모드에 따라 summary, worklog, handoff 최신 파일을 읽는다.

## Latest File Selection

Find the latest Markdown file in the target workflow folder.

Prefer timestamped files with this format:

```text
YYYYMMDD-HHMMSS-<mode>.md
```

If multiple files exist, use the newest file by filename sort when timestamped names are present. If filenames are not timestamped, use the most recent modified time.

Korean note: timestamp 파일명이 있으면 이름 정렬 기준 최신 파일을 사용하고, 아니면 수정 시간을 기준으로 최신 파일을 사용한다.

## Required Behavior

After reading the latest file:

- Summarize what was loaded.
- Identify current status, decisions, pending work, and next steps.
- Continue the user's requested task using that loaded context.
- Do not invent missing context.

Korean note: 최신 파일 내용을 요약한 뒤 현재 상태, 결정사항, 남은 작업, 다음 단계를 기준으로 이어서 작업한다.

## Missing Files

If the folder does not exist or has no Markdown files:

- Say that no saved workflow file exists for that mode.
- Suggest creating one with `/summary`, `/worklog`, or `/handoff`.
- Do not continue from an invented context.

Korean note: 저장된 파일이 없으면 없다고 말하고, 없는 맥락을 만들어서 이어가지 않는다.

## Useful Commands

Use equivalent shell commands for the active environment.

```bash
ls .codex/workflow/summary/*.md
ls .codex/workflow/worklog/*.md
ls .codex/workflow/handoff/*.md
```

Korean note: 환경에 맞는 파일 목록 명령으로 최신 workflow 파일을 찾는다.
