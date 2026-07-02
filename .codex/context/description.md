# Project Description

This repository provides a reusable Codex harness package.


## Purpose

The package installs a CLI named `yume-codex`.


The CLI copies `AGENTS.md` and `.codex/` harness files into a target project.


## Main Commands

- `yume-codex init`: add missing harness files without overwriting existing files
- `yume-codex rebase`: overwrite existing harness files and add new ones
- `yume-codex doctor`: check required harness files
- `yume-codex update`: reinstall the global CLI from GitHub


## Coding Standard

Projects that use this harness should write application code in TypeScript by default.


Framework versions should be selected explicitly before creating or upgrading React, Expo, and React Native projects.


Frontend state, UI, styling, and form tools should be selected explicitly before creating new React web projects.

