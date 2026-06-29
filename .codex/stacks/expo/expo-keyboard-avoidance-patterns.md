# Expo Keyboard Avoidance Patterns

Use this reference after `.codex/stacks/expo/expo-keyboard-avoidance.md` decides keyboard avoidance is needed.

Korean note: 키보드 회피 적용이 필요하다고 판단된 뒤 구현 예시와 검증 기준을 확인한다.

## Full-Screen Form

For a simple full-screen form, use `KeyboardAvoidingView` with a scroll container when needed.

Korean note: 단순 전체 화면 폼에서는 필요한 경우 KeyboardAvoidingView와 ScrollView를 함께 사용한다.

```tsx
import { KeyboardAvoidingView, Platform, ScrollView, TextInput } from "react-native";

export function ProfileFormScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1, padding: 16 }}
      >
        <TextInput placeholder="Name" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
```

## Fixed Bottom Input

For a screen with a fixed bottom input, keep the existing structure and only protect the input area.

Korean note: 하단 고정 입력 영역이 있는 화면은 전체 구조를 바꾸지 말고 입력 영역 중심으로 보호한다.

```tsx
import { KeyboardAvoidingView, Platform, TextInput, View } from "react-native";

export function CommentScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>{/* content */}</View>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <View style={{ padding: 12 }}>
          <TextInput placeholder="Write a comment" />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
```

## Android Notes

For Android-specific issues, prefer project-consistent configuration first.

Korean note: Android 이슈는 먼저 프로젝트의 기존 설정과 일관된 방식으로 해결한다.

Consider:

- `softwareKeyboardLayoutMode` in Expo configuration when the project uses it.
- Android window soft input behavior when native configuration is available.
- Avoiding unnecessary absolute-positioned inputs near the bottom of the viewport.

## Verification

After applying keyboard avoidance, verify:

- Focusing each input keeps the field visible.
- Validation text and the next action remain reachable.
- iOS and Android behavior is considered.
- Existing layout spacing and scrolling still feel natural.
- No duplicate keyboard avoidance wrappers were introduced.

Korean note: 입력 포커스, 오류 메시지, 다음 액션, 양 플랫폼 동작, 기존 레이아웃 유지, 중복 wrapper 여부를 확인한다.
