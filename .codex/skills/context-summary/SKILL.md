---
name: context-summary
description: Use only when the user explicitly invokes "$context-summary", "/summary", "/worklog", or "/handoff", or explicitly asks to summarize current conversation context, repository work state, or create a handoff summary. Do not use for general coding, debugging, implementation, or review tasks unless one of these summary commands is requested.
---

# Context Summary

Summarize the current work context, repository state, and handoff information in a concise, actionable format.

Korean note: 현재 작업 맥락, 저장소 상태, 인수인계 정보를 간결하고 실행 가능하게 요약한다.

## Invocation Modes

Use the mode requested by the user:

- `/summary`: Summarize current conversation context, decisions, open questions, and next steps.
- `/worklog`: Summarize repository work state using local files and git context.
- `/handoff`: Produce a handoff summary that another Codex session can continue from.
- `$context-summary`: Ask the user which mode they want if no mode is specified.

Korean note: 사용자가 요청한 모드에 맞춰 대화 요약, 작업 로그, 인수인계 요약을 작성한다.

## Context Sources

Use only visible and verifiable context.

- Conversation context available in the current thread.
- Local repository files relevant to the request.
- Git state when available.
- Commands and test results that were actually run.

Do not invent decisions, commands, tests, commits, or file changes.

Korean note: 보이는 맥락과 검증 가능한 저장소 정보만 사용하고, 없는 사실은 만들지 않는다.

## Repository Inspection

For `/worklog` and `/handoff`, inspect repository state when a workspace is available.

Prefer these commands:

```bash
git status --short
git log --oneline --decorate -5
git diff --stat
git diff --cached --stat
```

Read project guidance files when they are relevant and available:

- `AGENTS.md`
- `.codex/context/description.md`
- `README.md`
- `CHANGELOG.md`

## Workflow Storage

When the user asks to save the result, write a new Markdown file under the matching workflow folder.

Korean note: 사용자가 저장을 요청하면 해당 workflow 폴더에 새 Markdown 파일로 저장한다.

Use these folders:

- `/summary`: `.codex/workflow/summary/`
- `/worklog`: `.codex/workflow/worklog/`
- `/handoff`: `.codex/workflow/handoff/`

Use this filename format:

```text
YYYYMMDD-HHMMSS-<mode>.md
```

Examples:

```text
.codex/workflow/summary/20260623-143000-summary.md
.codex/workflow/worklog/20260623-143000-worklog.md
.codex/workflow/handoff/20260623-143000-handoff.md
```

Do not overwrite existing workflow files. Always append by creating a new timestamped file.

Korean note: 기존 workflow 파일은 덮어쓰지 않고 timestamp 파일로 계속 쌓는다.

## Output Format

Default to this structure unless the user asks for a different format:

```text
Current state:
- ...

Completed:
- ...

Changed files:
- ...

Decisions:
- ...

Validation:
- ...

Open questions:
- ...

Next steps:
- ...
```

Keep the summary concise. Prefer concrete file paths, command names, commit hashes, and exact status over broad narration.

Korean note: 파일 경로, 명령어, 커밋, 상태처럼 구체적인 정보를 우선한다.

## Handoff Mode

For `/handoff`, optimize for continuity in a new Codex session.

Include:

- Goal and current status.
- Important decisions already made.
- Files changed or likely relevant.
- Commands already run and their result.
- Known risks or unresolved questions.
- The next recommended action.

If the user asks to write the handoff to disk, write it to `.codex/workflow/handoff/` using the timestamp filename rule.

Do not write files unless the user explicitly asks to save or update a workflow file.

Korean note: 사용자가 저장을 요청한 경우에만 인수인계 파일을 작성한다.

## Worklog Mode

For `/worklog`, focus on repository facts.

Include:

- Current branch and upstream when available.
- Working tree status.
- Staged and unstaged changes.
- Recent commits.
- Test or validation commands run.
- Files that still need commit or review.

## Summary Mode

For `/summary`, focus on conversation-level context.

Include:

- User goals and preferences.
- Decisions made during the conversation.
- Work completed in the current thread.
- Remaining work.
- Any assumptions that should be confirmed later.
