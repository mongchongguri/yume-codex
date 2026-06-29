# Expo Keyboard Avoidance Rules

Use these rules when modifying Expo or React Native screens that contain text input.

Korean note: Expo 또는 React Native 화면에서 TextInput을 수정할 때 키보드 회피 적용 여부를 판단한다.

## Decision Criteria

Apply keyboard avoidance only when a `TextInput` can realistically be covered by the software keyboard.

Korean note: TextInput이 실제로 키보드에 가려질 가능성이 있을 때만 Keyboard Avoidance를 적용한다.

Check:

- Whether the screen contains `TextInput`, multiline text input, search input, chat input, or form fields.
- Whether the input sits near the lower half of the screen, inside a form, modal, bottom sheet, footer, or fixed action area.
- Whether focusing the input can hide the field itself, helper text, validation text, submit button, or important next action.
- Whether the screen already uses `KeyboardAvoidingView`, keyboard-aware scroll utilities, or a shared layout that handles keyboard avoidance.
- Whether behavior differs on iOS and Android.

Korean note: 입력창 위치, 폼 구조, 제출 버튼, 오류 메시지, 기존 키보드 회피 구현, iOS/Android 차이를 확인한다.

## When To Apply

Apply keyboard avoidance when:

- A focused input can be hidden by the keyboard.
- The submit or next action can be hidden while typing.
- A scrollable form needs to keep the focused field visible.
- A chat or comment composer is placed near the bottom of the screen.
- A modal or bottom sheet contains editable fields.

Korean note: 입력창, 제출 버튼, 다음 액션, 하단 입력 영역, 모달 입력 영역이 키보드에 가려질 수 있으면 적용한다.

## When Not To Apply

Do not add keyboard avoidance when:

- The screen has no `TextInput`.
- The input is already safely visible above the keyboard.
- The screen already has a shared keyboard avoidance wrapper.
- The change would add duplicate keyboard handling.
- The layout is static and cannot be affected by the keyboard.

Korean note: TextInput이 없거나, 이미 안전하거나, 공통 처리 중이거나, 중복 구현이 되는 경우에는 적용하지 않는다.

## Implementation Rules

- Do not wrap every screen with `KeyboardAvoidingView` by default.
- Preserve the existing layout as much as possible.
- Prefer the smallest code change that fixes the keyboard overlap.
- Reuse existing project keyboard avoidance utilities before adding a new one.
- Do not create multiple different keyboard avoidance patterns in the same project.
- Consider both iOS and Android behavior.
- Keep scroll position, safe area, headers, tab bars, and bottom actions stable.

Korean note: 모든 화면에 일괄 적용하지 말고, 기존 레이아웃을 유지하면서 최소 변경으로 중복 없이 처리한다.

## Implementation Reference

For implementation patterns, code examples, Android notes, and verification checks, read `.codex/stacks/expo/expo-keyboard-avoidance-patterns.md`.

Korean note: 구현 예시, Android 고려사항, 검증 기준은 별도 패턴 문서를 확인한다.

## Exceptions

Keyboard avoidance may be skipped when:

- The input is only used on web and cannot be covered by a mobile keyboard.
- The input is in a header or top area that remains visible.
- The project uses a proven shared screen layout that already handles keyboard behavior.
- The user explicitly requests no keyboard avoidance for that screen.

Korean note: 웹 전용 입력, 상단 입력, 기존 공통 레이아웃 처리, 사용자 명시 요청이 있으면 예외로 둘 수 있다.
