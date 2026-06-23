# Expo Design Rules

Use these rules when designing Expo UI.

Korean note: Expo UI를 설계할 때 이 규칙을 따른다.

## References

- `.codex/common/design/principles.md`
- `.codex/common/design/layout.md`
- `.codex/common/design/interaction.md`
- `.codex/stacks/expo/decisions.md`

Korean note: 공통 디자인 규칙과 Expo decisions 문서를 함께 따른다.

## Default Direction

- Mobile-first layout.
- Web-testable layout when Expo Web is enabled.
- Safe-area aware screens.
- Native touch target sizes.
- NativeWind when a Tailwind-like workflow is desired.
- React Native StyleSheet with shared tokens when staying close to native primitives.
- React Native Paper when a standard mobile component library is needed.
- Icons: Font Awesome.

Korean note: Expo는 모바일 우선, 웹 테스트 가능 레이아웃, 안전 영역, 충분한 터치 크기를 기본으로 한다.

## Mobile Layout

- Avoid desktop-only assumptions.
- Keep primary actions reachable.
- Keep repeated list items stable in height when possible.
- Use bottom tabs, stack navigation, or route-based navigation according to the app structure.
- Keep forms short or split them into clear steps.

Korean note: 모바일에서 조작하기 쉬운 위치와 크기, 명확한 단계 구성을 우선한다.

## Web Layout

When Expo Web is enabled:

- Avoid native-only layout assumptions.
- Keep screens usable at desktop browser widths.
- Ensure text and controls do not overflow on browser resize.
- Provide fallbacks for native-only interactions.

Korean note: Expo Web이 활성화된 경우 브라우저 폭에서도 화면과 컨트롤이 깨지지 않도록 한다.

## Verification

- Check safe-area behavior.
- Check touch target sizes.
- Check important flows on target platforms when possible.
- Ensure text does not overflow small screens.
- When Expo Web is enabled, check the web entry point with `npx expo start --web`.

Korean note: 안전 영역, 터치 크기, 작은 화면 텍스트 넘침을 확인한다.
