# Interaction Rules

Use these rules when designing controls, feedback, and user actions.

Korean note: 컨트롤, 피드백, 사용자 행동을 설계할 때 이 규칙을 따른다.

## Controls

- Use icons in tool buttons when a recognizable symbol exists.
- Use text or icon-plus-text buttons for clear commands.
- Use toggles or checkboxes for binary settings.
- Use segmented controls for modes.
- Use sliders, steppers, or numeric inputs for numeric values.
- Use tabs for sibling views.
- Use menus for option sets.

Korean note: 버튼과 입력은 기능에 맞는 익숙한 컨트롤을 사용한다.

## Icons

- Use Font Awesome according to the active stack's `decisions.md`.
- Match icons to the action or meaning of the button.
- Add labels or tooltips when an icon is not obvious.
- Do not use icons as decoration when they do not clarify meaning.

Korean note: 아이콘은 Font Awesome을 사용하고 버튼 기능과 의미에 맞게 선택한다.

## Feedback

- Show loading states for async actions.
- Show empty states with the next useful action.
- Show success feedback only when it helps the user continue.
- Show errors with actionable recovery text.

Korean note: 로딩, 빈 상태, 성공, 오류 피드백은 사용자가 다음 행동을 알 수 있게 만든다.

## Friendly UX

Interactions should feel clear, calm, and helpful.

Korean note: 인터랙션은 사용자가 편하게 이해하고 다음 행동을 할 수 있도록 친근하고 차분해야 한다.

- Use short, human labels for buttons, empty states, validation, and errors.
- Make primary actions easy to find without overwhelming the screen.
- Use gentle motion or transitions only when they clarify state changes.
- Keep disabled, selected, hover, focus, loading, error, and success states visually distinct.
- Prefer helpful recovery actions over blame-oriented error messages.

Korean note: 버튼, 상태, 오류 메시지는 짧고 자연스럽게 작성하고, 사용자가 다음 행동을 쉽게 찾게 한다.

## Safety

- Confirm destructive actions.
- Disable or guard actions that are invalid in the current state.
- Validate user input at the UI boundary first.
- Validate again at the service or backend boundary.

Korean note: 위험한 동작은 확인하고, 입력은 화면단과 서비스/백엔드 경계에서 다시 검증한다.

## Accessibility

- Keep focus states visible.
- Provide accessible names for icon-only buttons.
- Maintain adequate contrast.
- Keep touch targets large enough for mobile use.
- Support keyboard interaction for important controls when the platform supports it.

Korean note: 포커스, 접근성 이름, 대비, 터치 크기, 키보드 조작을 고려한다.
