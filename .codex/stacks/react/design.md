# React Design Rules

Use these rules when designing React web UI.

Korean note: React 웹 UI를 설계할 때 이 규칙을 따른다.

## References

- `.codex/common/design/principles.md`
- `.codex/common/design/layout.md`
- `.codex/common/design/interaction.md`
- `.codex/stacks/react/decisions.md`

Korean note: 공통 디자인 규칙과 React decisions 문서를 함께 따른다.

## Default Direction

- Admin, dashboard, CRUD, table-heavy, and form-heavy apps: Ant Design plus Tailwind CSS layout utilities.
- Custom consumer-facing UI: Tailwind CSS with project-specific components.
- Icons: Font Awesome.
- Forms: React Hook Form with clear field-level validation.

Korean note: 업무형 React 웹은 Ant Design과 Tailwind CSS 조합을 기본으로 한다.

## Web Layout

- Use responsive grid or flex layouts with explicit constraints.
- Keep tables, filters, pagination, and bulk actions close together.
- Use Ant Design tables, forms, modals, drawers, tabs, and notifications for operational UI.
- Do not force Ant Design into highly custom consumer-facing interfaces.

Korean note: 업무형 UI에는 Ant Design 컴포넌트를 활용하고, 커스텀 UI에는 Tailwind 기반 자체 컴포넌트를 우선한다.

## Verification

- Check desktop and mobile widths when layout changes.
- Ensure button text and icons fit.
- Ensure tables, filters, modals, and drawers do not overflow.

Korean note: 레이아웃 변경 시 데스크톱과 모바일 폭에서 넘침과 겹침을 확인한다.
