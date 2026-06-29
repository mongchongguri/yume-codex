# Icon Image Implementation

Use this reference after `$icon-image` creates or receives a PNG icon asset.

Korean note: PNG 아이콘 asset을 생성하거나 받은 뒤 실제 프로젝트에 적용할 때 확인한다.

## Expo And React Native Usage

Use the existing image pattern when present. Otherwise, use `Image` from `react-native` or the project's existing optimized image component.

Korean note: Expo/React Native에서는 기존 이미지 패턴을 우선하고, 없으면 React Native `Image`를 사용한다.

```tsx
import { Image } from "react-native";

export function EmptyMemoIcon() {
  return (
    <Image
      source={require("../../assets/icons/empty-memo.png")}
      style={{ width: 96, height: 96 }}
      resizeMode="contain"
    />
  );
}
```

## React Web Usage

Use the project's existing asset import or public asset convention.

Korean note: React 웹에서는 프로젝트의 기존 asset import 또는 public 경로 규칙을 따른다.

```tsx
import memoIconUrl from "@/assets/icons/empty-memo.png";

export function EmptyMemoIcon() {
  return <img src={memoIconUrl} alt="" width={96} height={96} />;
}
```

Use an empty `alt` value for decorative icons. Use meaningful `alt` text only when the icon communicates information not present in adjacent text.

Korean note: 장식용 아이콘은 빈 alt를 사용하고, 의미 전달 아이콘만 alt 텍스트를 제공한다.

## Verification

After applying the icon:

- Confirm the PNG file exists at the expected path.
- Confirm the UI imports or references the PNG correctly.
- Confirm the rendered icon has stable width and height.
- Confirm the icon style matches surrounding UI.
- Confirm no Font Awesome or other icon library was used for this requested icon.

Korean note: 파일 존재, UI 연결, 렌더링 크기, 스타일 일관성, 아이콘 라이브러리 미사용 여부를 확인한다.
