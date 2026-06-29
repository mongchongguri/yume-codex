# Expo App Icon Implementation

Use this reference after `.codex/stacks/expo/expo-app-icon.md` decides an Expo app icon should be applied.

Korean note: Expo 앱 아이콘 적용이 필요하다고 판단된 뒤 설정 예시와 검증 기준을 확인한다.

## app.json Example

For `app.json`, update paths similar to:

```json
{
  "expo": {
    "icon": "./assets/icon.png",
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#F7F4FF"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}
```

## Dynamic Config

For `app.config.js` or `app.config.ts`, preserve existing dynamic config logic and update only the relevant icon fields.

Korean note: 동적 app config는 기존 로직을 유지하고 아이콘 관련 필드만 최소 변경한다.

## Verification

After applying:

- Confirm the referenced icon files exist.
- Confirm config paths are relative and valid from the config file.
- Run available project checks when practical.
- For Expo projects, prefer `npx expo config` when available to validate config resolution.
- If web is supported, verify favicon path is configured.

Korean note: 파일 존재, 설정 경로, Expo config 해석, web favicon 설정을 확인한다.
