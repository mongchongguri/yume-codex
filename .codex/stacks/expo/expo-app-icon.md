# Expo App Icon Rules

Use these rules when creating, replacing, or updating an Expo app icon.

Korean note: Expo 앱 아이콘을 생성하거나 변경할 때 아이콘 파일 생성부터 설정 반영까지 자동으로 처리한다.

## Core Rule

When the task is to create or replace an Expo app icon, do not stop after generating the image file. Apply it to the Expo project configuration as part of the same task.

Korean note: Expo 앱 아이콘을 만들거나 바꾸는 작업은 이미지 생성에서 끝내지 말고 Expo 설정 적용까지 완료한다.

## What To Inspect

Before editing:

- Check whether the project uses `app.json`, `app.config.js`, or `app.config.ts`.
- Check current `expo.icon`, `expo.android.icon`, `expo.ios.icon`, `expo.web.favicon`, and adaptive icon settings.
- Check existing asset folders such as `assets/`, `assets/images/`, or `assets/icons/`.
- Check whether the project already has icon naming conventions.

Korean note: app 설정 파일, 기존 아이콘 설정, adaptive icon, asset 폴더, 파일명 규칙을 먼저 확인한다.

## Asset Generation

Create or place the app icon asset in the project asset folder.

Korean note: 앱 아이콘 파일은 프로젝트 asset 폴더에 생성하거나 배치한다.

Default recommendations:

- Main app icon: `assets/icon.png`
- Android adaptive foreground: `assets/adaptive-icon.png`
- Android adaptive background: set a solid color in config unless the project already uses an image
- Web favicon: `assets/favicon.png`

Use project conventions if they already differ from these defaults.

Korean note: 기존 프로젝트 규칙이 있으면 기본 경로보다 기존 규칙을 우선한다.

## Image Requirements

- Use PNG.
- Prefer a square source image.
- For the main app icon, use `1024x1024` when generating a new asset.
- Keep the design readable at small launcher sizes.
- Avoid important details near the outer edge.
- Use enough contrast against the intended background.
- If adaptive icon is needed, keep the foreground centered with safe padding.

Korean note: PNG, 정사각형, 1024x1024 원본, 작은 크기 가독성, 가장자리 여백, adaptive icon 안전 영역을 지킨다.

## Expo Config Application

After creating or replacing the icon file, update Expo configuration.

Korean note: 아이콘 파일 생성 후 Expo 설정 파일까지 수정한다.

Read `.codex/stacks/expo/expo-app-icon-implementation.md` for config examples and verification details.

Korean note: 설정 예시와 검증 기준은 별도 구현 문서를 확인한다.

## Automatic Application Rule

When the user asks to make or change an Expo app icon:

1. Create or update the PNG icon asset.
2. Update the Expo config to point to the new asset.
3. Update Android adaptive icon settings when present or appropriate.
4. Update web favicon when the project supports web.
5. Preserve unrelated app config fields.
6. Report changed files and paths.

Korean note: 아이콘 asset 생성, Expo 설정 연결, adaptive icon, favicon 반영, 변경 파일 보고까지 한 번에 처리한다.

## Exceptions

Do not modify app icon config when:

- The user only asks for a concept image and explicitly says not to apply it.
- The project is not an Expo project.
- The config is generated externally and must not be edited directly.
- The icon asset requires manual designer approval before application.

Korean note: 컨셉만 요청했거나, Expo가 아니거나, 외부 생성 config거나, 수동 승인이 필요한 경우에는 적용하지 않는다.
