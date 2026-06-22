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

## Verification

Run the project's available Expo or React Native checks after changes.

Korean note: 수정 후 프로젝트에 정의된 Expo 또는 React Native 검사 명령을 실행한다.
