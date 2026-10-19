---
name: planning
description: Create or revise project plans when the user requests planning, requirements changes, or edits to .codex/context/description.md or .codex/context/update.md. Do not invoke for routine implementation, bug fixes, copy edits, styling, or behavior-preserving refactors that leave project requirements unchanged.
---

# Planning

## Overview

Use this skill to turn a user's project idea or planning change request into repository context files that future Codex work can rely on.

The primary planning file is `.codex/context/description.md`. When changing an existing plan, also create or update `.codex/context/update.md` with a concise change record.

## Workflow

1. Classify the request before loading planning documents.
   - New plan: the user describes a project to build and no existing project plan should be preserved.
   - Plan update: the user asks to change, add, remove, refine, or correct requirements in an existing plan.
   - Routine implementation without a requirements change: follow the applicable project rules without invoking this planning workflow or reading or updating planning documents solely because code is changing.
   - If the request is ambiguous and overwriting could lose useful context, ask one concise clarification before editing.

2. Inspect only the necessary project context.
   - Read `AGENTS.md` when present and follow its instructions.
   - Reuse relevant context already available in the conversation instead of rereading unchanged documents.
   - For a focused plan update, search existing `.codex/context/description.md` for relevant headings or terms and read the affected sections and dependencies. Read the full document when creating a replacement plan or making broad changes that require it.
   - Read only relevant entries from `.codex/context/update.md` when earlier decisions affect the current update; appending a new entry does not require reading the entire log.
   - If `.codex/context/` does not exist but `context/` exists, ask whether the project intentionally uses `context/`; otherwise create `.codex/context/`.

3. Gather only necessary details.
   - Make reasonable assumptions for low-risk gaps and label them in the plan.
   - Ask before locking in high-impact decisions such as target platform, paid services, authentication model, data storage, deployment target, or compliance-sensitive requirements.
   - Prefer the project's existing stack and harness rules over introducing new tools.

4. Edit the planning files.
   - For a new plan, create or rewrite `.codex/context/description.md` as the source of truth for the project.
   - For a plan update, update `.codex/context/description.md` in place and preserve useful existing context.
   - For a plan update, create `.codex/context/update.md` if missing, then append or update an entry that records what changed.

5. Validate the result.
   - Confirm the plan is internally consistent.
   - Confirm requirements, non-goals, open questions, and implementation phases do not contradict each other.
   - Report changed files and the main planning changes to the user.

## `description.md` Structure

Write the plan in clear Markdown. Use English unless the project already stores planning context in another language or the user explicitly asks for Korean.

Use this structure when creating a new plan:

```markdown
# Project Description

## Purpose

## Target Users

## Core Goals

## Non-Goals

## User Experience

## Functional Requirements

## Data And State

## Technical Direction

## Implementation Phases

## Risks And Constraints

## Open Questions
```

Adapt section names when the repository already uses a different planning format. Keep the document practical for future implementation work, not a product brochure.

## `update.md` Structure

For plan updates, maintain `.codex/context/update.md` as a planning change log.

Create it with this structure when missing:

```markdown
# Planning Updates

## YYYY-MM-DD

### Request

### Updated Scope

### Changed Requirements

### Removed Or Deferred

### Notes For Implementation
```

For each update:

- Use the current local date.
- Summarize the user's requested change.
- List the exact planning areas changed in `description.md`.
- Record removed, deferred, or superseded requirements when applicable.
- Keep entries concise enough to scan during later implementation work.

## Editing Rules

- Do not silently discard existing project context.
- Prefer updating specific sections over rewriting the whole plan when the request is a small change.
- If the existing `description.md` contains harness/package metadata rather than the user's app plan, preserve necessary harness context or ask before replacing it.
- Keep Markdown UTF-8 clean and avoid mojibake.
- Do not add extra files besides `description.md` and `update.md` unless the user asks or the project rules require them.
