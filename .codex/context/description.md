# Project Description

This repository provides a reusable Codex harness package.

Korean note: 이 저장소는 여러 프로젝트에 공통 하네스 문서를 배포하기 위한 패키지다.

## Purpose

The package installs a CLI named `yume-codex`.

Korean note: 이 패키지는 `yume-codex` CLI를 제공한다.

The CLI copies `AGENTS.md` and `.codex/` harness files into a target project.

Korean note: CLI는 대상 프로젝트에 `AGENTS.md`와 `.codex/` 문서를 추가한다.

## Main Commands

- `yume-codex init`: add missing harness files without overwriting existing files
- `yume-codex rebase`: overwrite existing harness files and add new ones
- `yume-codex doctor`: check required harness files
- `yume-codex update`: reinstall the global CLI from GitHub

Korean note: `init`은 보존 중심, `rebase`는 최신 템플릿 반영 중심이다.
