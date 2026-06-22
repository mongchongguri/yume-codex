# yume-codex

Codex harness engineering templates and a small CLI initializer.

## Install from GitHub

After this repository is pushed to GitHub, install it globally with:

```bash
npm install -g github:mongchongguri/yume-codex
```

or:

```bash
npm install -g https://github.com/mongchongguri/yume-codex.git
```

Then run this inside the project directory where `AGENTS.md` and `.codex/` should be created:

```bash
yume-codex init
```

Check the installed CLI:

```bash
yume-codex --help
yume-codex --version
```

## Usage

Initialize a project with the harness files:

```bash
yume-codex init
```

Initialize another directory:

```bash
yume-codex init ./my-project
```

Overwrite existing harness files:

```bash
yume-codex init --force
```

Rebase harness files after updating the CLI:

```bash
yume-codex rebase
```

`rebase` overwrites existing harness files and adds new files from the installed template version.

Check whether the required harness files exist:

```bash
yume-codex doctor
```

Update the globally installed CLI from the `main` branch:

```bash
yume-codex update
```

Update to a specific tag, branch, or commit:

```bash
yume-codex update v0.1.0
```

## Included Files

- `AGENTS.md`
- `.codex/common/rules`
- `.codex/common/patterns`
- `.codex/context`
- `.codex/stacks`

## GitHub Setup

This package is already configured for:

- package name: `yume-codex`
- CLI command: `yume-codex`
- repository: `https://github.com/mongchongguri/yume-codex.git`

First commit and push:

```bash
git commit -m "Initial yume-codex CLI harness"
git push -u origin main
```

If the `origin` remote is not registered yet, add it first:

```bash
git remote add origin https://github.com/mongchongguri/yume-codex.git
```

After pushing, other machines can install the CLI directly from GitHub:

```bash
npm install -g github:mongchongguri/yume-codex
yume-codex init
```

For a specific branch, tag, or commit:

```bash
npm install -g github:mongchongguri/yume-codex#main
```

## Version Management

The CLI version is managed by `package.json`.

For each release:

```bash
npm version patch --no-git-tag-version
```

Then update `CHANGELOG.md`, commit, tag, and push:

```bash
git add .
git commit -m "Release v0.1.1"
git tag v0.1.1
git push origin main --tags
```

Users can update to the latest `main` branch:

```bash
yume-codex update
yume-codex rebase
```

Users can pin a released version:

```bash
npm install -g github:mongchongguri/yume-codex#v0.1.1
yume-codex rebase
```
