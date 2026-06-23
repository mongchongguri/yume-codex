# React Native Design Rules

Use these rules when designing bare React Native UI.

Korean note: Bare React Native UI를 설계할 때 이 규칙을 따른다.

## References

- `.codex/common/design/principles.md`
- `.codex/common/design/layout.md`
- `.codex/common/design/interaction.md`
- `.codex/stacks/react-native/decisions.md`

Korean note: 공통 디자인 규칙과 React Native decisions 문서를 함께 따른다.

## Default Direction

- Native platform conventions first.
- React Native StyleSheet with shared design tokens by default.
- NativeWind only when requested or already used.
- React Native Paper when a standard native component library is needed.
- Icons: Font Awesome.

Korean note: React Native는 네이티브 플랫폼 관례와 StyleSheet 기반 디자인 토큰을 기본으로 한다.

## Mobile Layout

- Avoid web-only layout assumptions.
- Respect safe areas and platform navigation behavior.
- Handle Android back behavior intentionally.
- Keep touch targets large enough.
- Keep permissions, deep links, push notifications, and native settings explicit in UI flows.

Korean note: 안전 영역, 플랫폼 내비게이션, Android 뒤로가기, 권한 흐름을 명확히 설계한다.

## Verification

- Check Android and iOS behavior when native configuration changes.
- Check text overflow on small devices.
- Check touch target sizes.
- Check platform-specific UI differences.

Korean note: 네이티브 설정 변경 시 Android/iOS 동작과 작은 화면 표시를 확인한다.
