# Expo Rules

Use these rules when working in Expo projects.

Korean note: Expo 프로젝트 작업 시 이 규칙을 따른다.

## Structure

- Keep screens route-focused.
- Move reusable UI into shared components.
- Move feature-specific logic into `features/<feature-name>/`.
- Keep platform-specific code isolated when behavior differs by platform.

Korean note: 화면, 공통 UI, 기능 로직, 플랫폼별 코드를 분리한다.

## Mobile Considerations

- Account for safe areas.
- Keep touch targets large enough for mobile use.
- Avoid layouts that rely on desktop-only dimensions.
- Test important flows on the target platform when possible.

Korean note: 모바일 안전 영역, 터치 크기, 플랫폼별 동작을 고려한다.

## Frontend Decisions

Follow `.codex/common/rules/frontend-decisions.md` and `.codex/stacks/expo/decisions.md` before choosing state management, UI libraries, or styling tools.

Korean note: 상태 관리, UI 라이브러리, 스타일링 도구를 선택하기 전에 프론트엔드 의사결정 규칙을 따른다.

## Design

Follow `.codex/stacks/expo/design.md` when designing Expo UI.

Korean note: Expo UI를 설계할 때 Expo 디자인 규칙을 따른다.

## Version Selection

Follow `.codex/common/rules/versioning.md` before creating or upgrading an Expo project.

Korean note: Expo 프로젝트 생성 또는 업그레이드 전 버전 선택 규칙을 따른다.

For new Expo projects, report the selected Node.js, package manager, Expo SDK, React Native, React, and TypeScript versions before scaffolding.

Korean note: 신규 Expo 프로젝트 생성 전 Node.js, 패키지 매니저, Expo SDK, React Native, React, TypeScript 버전을 보고한다.

Use Expo SDK compatibility as the source of truth for React Native and Expo package versions.

Korean note: React Native와 Expo 패키지 버전은 Expo SDK 호환성을 기준으로 맞춘다.

## Verification

Run the project's available Expo or React Native checks after changes.

Korean note: 수정 후 프로젝트에 정의된 Expo 또는 React Native 검사 명령을 실행한다.
