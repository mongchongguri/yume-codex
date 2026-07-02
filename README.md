# yume-codex

`yume-codex` is a CLI for installing a reusable Codex harness into projects.

Running the CLI in a project adds `AGENTS.md`, `.codex/` harness documents, stack rules, and project skills.

## Installation

Install globally from GitHub:

```bash
npm install -g github:mongchongguri/yume-codex
```

Or install from the Git URL:

```bash
npm install -g https://github.com/mongchongguri/yume-codex.git
```

Check the installed CLI:

```bash
yume-codex --version
yume-codex --help
```

## Basic Usage

Install the harness in the current project:

```bash
yume-codex init
```

Install the harness in another directory:

```bash
yume-codex init ./my-project
```

Overwrite existing harness files during init:

```bash
yume-codex init --force
```

## Commands

### `yume-codex init [target] [--force]`

Copies `AGENTS.md` and `.codex/` harness files into the target project.

- The default target is the current directory.
- Existing files are skipped by default.
- `--force` overwrites existing harness files, except preserved project-specific files.

### `yume-codex rebase [target]`

Reapplies the harness from the installed `yume-codex` version.

- Existing managed harness files are overwritten.
- New managed harness files are added.
- Removed managed files are pruned from the generated manifest.
- `.codex/context/description.md` is preserved when it already exists because it is project-specific.
- Project source code outside the harness is not modified.

Recommended update flow:

```bash
yume-codex update
yume-codex rebase
```

### `yume-codex doctor [target]`

Checks whether the required harness files exist.

```bash
yume-codex doctor
```

It prints `OK` when the target is valid and lists missing files otherwise.

### `yume-codex update [ref]`

Reinstalls the global `yume-codex` CLI from GitHub.

The default ref is `main`.

```bash
yume-codex update
```

A tag, branch, or commit can also be used:

```bash
yume-codex update v0.1.7
yume-codex update main
```

### `yume-codex --version`

Prints the installed CLI version.

```bash
yume-codex --version
```

### `yume-codex --help`

Prints command help and examples.

```bash
yume-codex --help
```

## Included Harness Structure

- `AGENTS.md`: top-level Codex project instructions.
- `.codex/context/`: project description and decision context.
- `.codex/common/rules/`: shared coding, reporting, TypeScript, and versioning rules.
- `.codex/common/rules/frontend/`: frontend state, styling, icon, and reporting rules.
- `.codex/common/patterns/`: shared code organization patterns.
- `.codex/common/design/`: shared UI design guidance.
- `.codex/stacks/react/`: React stack rules and decisions.
- `.codex/stacks/expo/`: Expo stack rules, SDK compatibility, web testing, app icon, keyboard avoidance, and decisions.
- `.codex/stacks/react-native/`: React Native stack rules and decisions.
- `.codex/skills/`: project skills callable from Codex.
- `.codex/workflow/`: generated summary, worklog, and handoff files.

Generated `.codex/workflow/**/*.md` files are excluded from git and package distribution. Only `.gitkeep` files are included to preserve folders.

## Documentation Language

Harness Markdown files are written in English.

User-facing progress reports, completion reports, and option prompts should be written in Korean when the user is working in Korean.

## Included Skills

Skills are intended to be invoked explicitly with `/skill-name` or `$skill-name`.

### `/summary`

Saves a concise summary of the current conversation context.

Output:

```text
.codex/workflow/summary/YYYYMMDD-HHMMSS-summary.md
```

Includes:

- User goals and preferences
- Decisions made in the conversation
- Completed work
- Open questions
- Next steps

### `/worklog`

Saves a repository worklog based on git status, diffs, recent commits, and validation commands.

Output:

```text
.codex/workflow/worklog/YYYYMMDD-HHMMSS-worklog.md
```

Includes:

- Current branch and upstream
- Staged changes
- Unstaged changes
- Recent commits
- Commands run and results
- Files that still need commit, review, or follow-up

### `/handoff`

Saves a handoff document so another Codex session can continue the work.

Output:

```text
.codex/workflow/handoff/YYYYMMDD-HHMMSS-handoff.md
```

Includes:

- Current goal and status
- Important decisions already made
- Changed or relevant files
- Commands already run and results
- Known risks or unresolved questions
- Next recommended action

### `/read-summary`

Reads the latest file from `.codex/workflow/summary/` and continues from that context.

### `/read-worklog`

Reads the latest file from `.codex/workflow/worklog/` and continues from that repository state.

### `/read-handoff`

Reads the latest file from `.codex/workflow/handoff/` and continues from that handoff context.

### `/build-progress`

Runs long build commands with active progress reports instead of only showing that a command is running.

Use for:

- Release APK builds
- AAB builds
- Expo or React Native builds
- Gradle builds
- Long production builds or deployment commands

Main behavior:

- Report the command before it starts.
- Inspect the latest terminal output while the command runs.
- Report progress about every 30 seconds.
- Infer build phases such as dependency resolution, Expo config, Gradle configuration, JavaScript bundling, resource processing, compilation, signing, and artifact generation.
- Report the artifact path, warnings, and result when complete.

### `/git`

Synchronizes the current repository with the connected git remote.

Main behavior:

- Inspect current branch, upstream, remote, and changed files.
- Pull with `git pull --rebase --autostash` when local changes exist.
- Commit changes with a user-provided or generated commit message.
- Push with `git push` when upstream exists, or `git push -u origin <branch>` when needed.
- Stop and report when conflicts, missing remotes, risky changes, or force-push situations occur.

Safety:

- Use only when explicitly invoked with `/git` or `$git`.
- Do not run `git reset --hard`, `git clean`, or force push.
- Do not commit generated `.codex/workflow/**/*.md` files.

### `/icon-image`

Creates PNG icon image assets and applies them to the current project instead of using Font Awesome, Lucide, Material Icons, or other icon libraries.

Main behavior:

- Understand the requested icon meaning, target screen, and visual tone.
- Inspect existing asset folders and image import patterns.
- Save PNG assets to a project-appropriate path such as `assets/icons/`, `src/assets/icons/`, or `public/icons/`.
- Apply the PNG using the project's existing image pattern.
- Verify rendered size, blur, cropping, and layout stability.

Safety:

- Use only when explicitly invoked with `/icon-image` or `$icon-image`.
- Do not replace the requested PNG asset with an icon font or SVG icon library.
- Use transparent-background PNG for normal UI icons by default.
- Keep the silhouette readable at small sizes.

## Update Flow

When the harness repository adds new rules or skills, apply them with:

```bash
yume-codex update
yume-codex rebase
yume-codex doctor
```

`update` reinstalls the global CLI from GitHub.

`rebase` reapplies `AGENTS.md` and `.codex/` from the installed CLI version while preserving `.codex/context/description.md` when it already exists.

`doctor` verifies required files.

## Version Management

The package version is managed in `package.json`.

Release example:

```bash
npm version patch --no-git-tag-version
```

Then update `CHANGELOG.md`, commit, tag, and push:

```bash
git add .
git commit -m "Release v0.1.7"
git tag v0.1.7
git push origin main --tags
```

Install a specific version by tag:

```bash
npm install -g github:mongchongguri/yume-codex#v0.1.7
yume-codex rebase
```

## GitHub Repository Setup

This package is configured as:

- Package name: `yume-codex`
- CLI command: `yume-codex`
- Repository: `https://github.com/mongchongguri/yume-codex.git`

Add the remote if it is not registered yet:

```bash
git remote add origin https://github.com/mongchongguri/yume-codex.git
```

Push:

```bash
git push -u origin main
```
