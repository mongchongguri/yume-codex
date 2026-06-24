# Version Selection Rules

Use these rules when creating or upgrading projects that depend on framework versions.

Korean note: 프레임워크 버전을 선택하거나 업그레이드할 때 이 기준을 따른다.

## Existing Projects

Preserve the existing major versions unless the user explicitly asks for an upgrade.

Korean note: 기존 프로젝트는 사용자가 요청하지 않는 한 기존 major 버전을 유지한다.

Before adding packages, inspect the existing dependency versions in `package.json`, lockfiles, and framework config files.

Korean note: 패키지를 추가하기 전에 `package.json`, lockfile, 프레임워크 설정 파일의 버전을 확인한다.

## Package Compatibility Before Install

Before installing or updating a package, verify the compatible version for the current project stack.

Korean note: 패키지를 설치하거나 업데이트하기 전에 현재 프로젝트 스택과 호환되는 버전을 먼저 확인한다.

Check compatibility against:

- Existing dependency versions in `package.json` and lockfiles
- Framework versions, such as React, Expo SDK, React Native, Next.js, Vite, or other build tools
- Peer dependencies declared by the package
- Runtime requirements, such as Node.js, TypeScript, Android, iOS, Gradle, or Kotlin versions
- Official framework compatibility tables or official package registry metadata

Korean note: 기존 의존성, 프레임워크 버전, peer dependency, 런타임 요구사항, 공식 호환성 표 또는 공식 패키지 메타데이터를 기준으로 확인한다.

Do not install the newest package version by default when compatibility is unclear.

Korean note: 호환성이 불명확하면 최신 버전을 기본값으로 설치하지 않는다.

Prefer:

- A specific compatible version, such as `npm install package@x.y.z`
- A framework-managed installer, such as `npx expo install package`
- The safest compatible minor or patch version when the existing major version should be preserved

Korean note: 정확히 호환되는 버전, 프레임워크 전용 설치 명령, 기존 major를 유지하는 안전한 minor 또는 patch 버전을 우선한다.

When reporting package installation work, include the selected version, compatibility basis, and reason for the choice.

Korean note: 패키지 설치 작업을 보고할 때 선택한 버전, 호환성 기준, 선택 이유를 함께 보고한다.

## New Projects

For new projects, use the latest stable version that is compatible with the requested stack at the time of work.

Korean note: 신규 프로젝트는 작업 시점 기준 요청 스택과 호환되는 최신 stable 버전을 사용한다.

When exact versions matter, verify them from official documentation or the official package registry before implementation.

Korean note: 정확한 버전이 중요하면 구현 전에 공식 문서나 공식 패키지 레지스트리에서 확인한다.

## Version Report

Before scaffolding a new React or Expo project, report the selected versions.

Korean note: React 또는 Expo 신규 프로젝트를 만들기 전에 선택한 버전을 먼저 보고한다.

Report:

- Runtime version, such as Node.js
- Package manager, such as npm
- Framework version, such as React or Expo SDK
- TypeScript version when it is explicitly selected
- Reason for the selected version

Korean note: Node.js, 패키지 매니저, 프레임워크, TypeScript 버전과 선택 이유를 함께 보고한다.

## Compatibility

Prefer versions that are compatible with each other over simply choosing the newest package version.

Korean note: 단순히 최신 버전을 고르기보다 서로 호환되는 조합을 우선한다.

For Expo projects, follow the Expo SDK compatibility table for React, React Native, and Expo packages.

Korean note: Expo 프로젝트는 Expo SDK 호환표를 기준으로 React, React Native, Expo 패키지 버전을 맞춘다.

For React Native projects, follow the React Native compatibility guidance for React, Android, iOS, Gradle, Kotlin, and native dependencies.

Korean note: React Native 프로젝트는 React, Android, iOS, Gradle, Kotlin, 네이티브 의존성 호환성을 기준으로 버전을 맞춘다.

For React web projects, prefer the current stable React version and a stable build tool version supported by the project setup.

Korean note: React 웹 프로젝트는 현재 stable React와 프로젝트 구성에 맞는 안정적인 빌드 도구 버전을 사용한다.

## Upgrades

When upgrading versions, avoid silent major upgrades.

Korean note: 버전 업그레이드 시 major 업그레이드는 조용히 진행하지 않는다.

Major upgrades require:

- A short migration note
- Changed package list
- Commands run
- Verification result

Korean note: major 업그레이드에는 마이그레이션 요약, 변경 패키지, 실행 명령, 검증 결과가 필요하다.
