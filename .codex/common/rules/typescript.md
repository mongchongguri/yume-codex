# TypeScript Rules

All code should be written in TypeScript by default.

Korean note: 코드 작성은 기본적으로 TypeScript를 사용한다.

## Required Standard

- Use `.ts` for non-UI source files.
- Use `.tsx` for files that contain JSX.
- Prefer explicit domain types for API responses, service inputs, and shared data shapes.
- Avoid adding new JavaScript source files unless the runtime explicitly requires JavaScript.
- When JavaScript is unavoidable, keep it as a thin runtime wrapper and place implementation logic in TypeScript where possible.

Korean note: 일반 로직은 `.ts`, JSX가 있는 파일은 `.tsx`를 사용한다.

## Type Safety

- Do not use `any` unless there is a clear boundary reason.
- Prefer `unknown` plus narrowing for untrusted input.
- Define reusable types in a `types/` area when they are shared across modules.
- Keep API DTOs, domain models, and UI view models separate when their responsibilities differ.

Korean note: 타입 안정성을 위해 `any`는 예외적으로만 사용하고, 외부 입력은 좁혀서 처리한다.

## Validation Boundary

Validate data at the UI boundary first and validate it again in the service or backend boundary.

Korean note: 화면단에서 1차 검증하고 서비스 또는 백엔드 경계에서 다시 검증한다.

Use this pattern for user input, API payloads, permissions, and destructive actions.

Korean note: 사용자 입력, API 요청, 권한, 삭제 같은 위험 동작에 이 기준을 적용한다.
