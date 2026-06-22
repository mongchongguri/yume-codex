# Function Comment Rules

Use comments to explain intent and business purpose, not obvious implementation details.

Korean note: 주석은 구현 방식보다 의도와 비즈니스 목적을 설명한다.

## Required Comments

Add comments for:

- Exported functions
- API calls
- Business logic
- Event handlers
- Custom hooks

Korean note: 외부에 노출되거나 비즈니스 의미가 있는 함수에는 주석을 작성한다.

## Writing Standard

Comments should:

- Describe what the function is responsible for
- Avoid restating the function name
- Avoid describing obvious implementation steps
- Stay valid even if the implementation changes

Korean note: 함수명이 바뀌어도 의미가 유지되는 설명을 작성한다.

Good:

```ts
/**
 * Loads the user's profile information for the account screen.
 */
```

Bad:

```ts
/**
 * API call.
 */
```

```ts
/**
 * Runs axios.get.
 */
```

## Optional Comments

Comments may be skipped for:

- `open`
- `close`
- `toggle`
- Simple calculations
- Simple state updates

Korean note: 단순한 열기, 닫기, 토글, 계산, 상태 변경은 주석을 생략할 수 있다.
