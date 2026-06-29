# Changelog

## 0.1.6

- Add senior product designer, friendly UX, first screen quality, and soft pastel color direction rules.
- Add Expo keyboard avoidance rules for TextInput screens.
- Add Expo app icon rules to generate icon assets and apply them to Expo config.
- Add explicit `/git` skill for pull, commit, and push repository sync.
- Add explicit `/icon-image` skill for generating and applying PNG icon assets instead of icon libraries.
- Split longer implementation examples into focused reference documents.

## 0.1.5

- Add package compatibility version check rules before installation.

## 0.1.4

- Preserve existing `.codex/context/description.md` during `init --force` and `rebase`.

## 0.1.3

- Fix `yume-codex update` on Windows by running npm through the platform shell.

## 0.1.2

- Split workflow skills into slash-command folders: `summary`, `worklog`, `handoff`, `read-summary`, `read-worklog`, and `read-handoff`.
- Exclude generated `.codex/workflow/**/*.md` files from git and packaged installs.
- Add Expo Web testing guidance to Expo stack rules.
- Add a generated harness manifest and prune removed managed files during `rebase`.

## 0.1.1

- Release expanded harness rules, stack decisions, design references, workflow folders, and bundled context workflow skills.

## 0.1.0

- Add the initial `yume-codex` CLI.
- Add `init` for copying `AGENTS.md` and `.codex` harness templates.
- Add `rebase` for overwriting existing harness files and adding new harness files.
- Add `doctor` for checking required harness files.
- Add `update` for reinstalling the global CLI from GitHub.
- Add TypeScript-first coding rules.
- Add framework version selection rules for React and Expo projects.
- Add React Native stack rules.
- Add frontend tool selection rules for React projects.
- Split frontend tool defaults by React, Expo, and React Native stack.
- Move stack-specific frontend tool defaults into per-stack `decisions.md` files.
- Add Font Awesome icon rules for frontend stacks.
- Add common and stack-specific design reference rules.
- Split common frontend decision rules into smaller focused files.
- Add bundled `context-summary` Codex skill under `.codex/skills`.
- Store generated workflow summaries under `.codex/workflow`.
- Add bundled `context-reader` skill for reading latest saved workflow files.
- Add rules for adopting existing project design systems when the harness is introduced mid-project.
