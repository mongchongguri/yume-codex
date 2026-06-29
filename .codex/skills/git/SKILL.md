---
name: git
description: Use only when the user explicitly invokes "/git" or "$git" to synchronize the current repository with its connected remote by pulling, committing current work, and pushing the current branch. Do not use for general coding tasks or when the user only asks a git question.
---

# Git Sync

Synchronize the current repository with its connected remote.

Korean note: 현재 연결된 git 원격 저장소를 기준으로 pull, commit, push를 진행한다.

## Scope

This skill is for an explicit repository sync workflow:

1. Inspect the current git state.
2. Pull from the current upstream.
3. Stage and commit current work when changes exist.
4. Push the current branch to the connected remote.

Korean note: 저장소 상태 확인, pull, commit, push를 한 번에 처리하는 명시 호출용 스킬이다.

## Safety Rules

- Do not run `git reset --hard`, `git clean`, force push, or destructive checkout commands.
- Do not overwrite conflict files automatically.
- Stop and report when merge or rebase conflicts occur.
- Stop and ask when the repository has no remote or no clear upstream and `origin` cannot be inferred.
- Do not commit ignored files.
- Do not commit generated `.codex/workflow/**/*.md` files.
- If changes look unrelated, sensitive, or risky, report the files and ask before committing.

Korean note: 강제 초기화, 강제 push, 충돌 자동 덮어쓰기, 위험한 변경 자동 커밋은 금지한다.

## Workflow

Run these checks first:

```bash
git status --short
git branch --show-current
git branch -vv
git remote -v
```

Korean note: 먼저 현재 브랜치, upstream, remote, 변경 파일을 확인한다.

Pull before committing:

- If the working tree is clean, run `git pull --rebase`.
- If local changes exist, run `git pull --rebase --autostash`.
- If pull fails or reports conflicts, stop and summarize the conflict state.

Korean note: 로컬 변경이 있으면 autostash rebase로 pull하고, 충돌이 나면 중단한다.

Stage and commit:

- If the user provided a commit message, use it.
- Otherwise generate a concise commit message from the changed files and diff summary.
- Stage current non-ignored changes with `git add -A` unless the user requested a narrower scope.
- Run `git status --short` after staging.
- If there are staged changes, commit them.
- If there are no changes after pull, skip the commit.

Korean note: 사용자가 메시지를 주면 그대로 사용하고, 없으면 변경 요약 기준으로 짧은 커밋 메시지를 만든다.

Push:

- Prefer `git push` when the current branch already has an upstream.
- If there is no upstream but `origin` exists, use `git push -u origin <current-branch>`.
- Do not use `--force` or `--force-with-lease`.

Korean note: upstream이 있으면 일반 push를 사용하고, 없으면 origin에 현재 브랜치를 upstream으로 연결한다.

## Verification

After push, report:

- Current branch
- Commit hash when a commit was created
- Pull result
- Push result
- Remaining `git status --short`

Korean note: 완료 후 브랜치, 커밋 해시, pull/push 결과, 남은 상태를 보고한다.

## Failure Handling

If any step fails:

- Stop the workflow.
- Report the failed command and important output.
- Show the current `git status --short`.
- Do not attempt unrelated recovery commands.

Korean note: 실패하면 중단하고 상태를 보고하며, 임의 복구 명령은 실행하지 않는다.
