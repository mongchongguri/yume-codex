# React Native Rules

Use these rules when working in React Native projects that are not managed primarily by Expo.

Korean note: Expo 중심이 아닌 React Native 프로젝트 작업 시 이 규칙을 따른다.

## Structure

- Keep screens focused on navigation and composition.
- Move reusable UI into shared components.
- Move feature-specific UI, hooks, services, constants, and types into `features/<feature-name>/`.
- Keep native module setup separate from screen and UI logic.
- Isolate platform-specific behavior with explicit platform files or platform checks.

Korean note: 화면, 공통 UI, 기능 로직, 네이티브 설정, 플랫폼별 코드를 분리한다.

## TypeScript

Follow `.codex/common/rules/typescript.md`.

Korean note: TypeScript 공통 규칙을 따른다.

Use `.tsx` for components and `.ts` for hooks, services, constants, utilities, and types.

Korean note: 컴포넌트는 `.tsx`, 로직 파일은 `.ts`를 사용한다.

## Version Selection

Follow `.codex/common/rules/versioning.md` before creating or upgrading a React Native project.

Korean note: React Native 프로젝트 생성 또는 업그레이드 전 버전 선택 규칙을 따른다.

For new React Native projects, report the selected Node.js, package manager, React Native, React, TypeScript, Android Gradle Plugin, Gradle, Kotlin, and Xcode/iOS target versions when relevant.

Korean note: 신규 React Native 프로젝트 생성 전 Node.js, 패키지 매니저, React Native, React, TypeScript, Android/iOS 관련 버전을 보고한다.

Prefer the React Native version compatibility guidance over independently upgrading React, Gradle, Kotlin, or native platform packages.

Korean note: React, Gradle, Kotlin, 네이티브 패키지는 React Native 호환성 기준에 맞춘다.

## Mobile Considerations

- Account for safe areas.
- Keep touch targets large enough for mobile use.
- Avoid layouts that depend on desktop-only dimensions.
- Handle Android back behavior intentionally.
- Keep permissions, deep links, push notifications, and native config changes explicit.

Korean note: 안전 영역, 터치 크기, Android 뒤로가기, 권한, 딥링크, 푸시, 네이티브 설정을 명확히 다룬다.

## Frontend Decisions

Follow `.codex/common/rules/frontend-decisions.md` and `.codex/stacks/react-native/decisions.md` before choosing state management, UI libraries, or styling tools.

Korean note: 상태 관리, UI 라이브러리, 스타일링 도구를 선택하기 전에 프론트엔드 의사결정 규칙을 따른다.

## Design

Follow `.codex/stacks/react-native/design.md` when designing React Native UI.

Korean note: React Native UI를 설계할 때 React Native 디자인 규칙을 따른다.

## Verification

Run the project's available React Native checks after changes.

Korean note: 수정 후 프로젝트에 정의된 React Native 검사 명령을 실행한다.

When native files or dependencies change, verify the relevant Android or iOS build when the environment supports it.

Korean note: 네이티브 파일이나 의존성이 바뀌면 가능한 환경에서 Android 또는 iOS 빌드를 확인한다.
