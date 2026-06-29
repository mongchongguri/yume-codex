# Layout Rules

Use these rules when arranging screens, panels, lists, forms, and dashboards.

Korean note: 화면, 패널, 목록, 폼, 대시보드 배치 시 이 규칙을 따른다.

## Structure

- Start with the actual product experience, not a marketing hero, unless a landing page is requested.
- Keep page sections unframed unless they are repeated items, modals, or actual tool surfaces.
- Do not put cards inside cards.
- Keep cards at 8px radius or less unless the project design system says otherwise.
- Use stable dimensions for boards, tables, toolbars, counters, grids, and fixed-format controls.

Korean note: 실제 사용 화면을 먼저 만들고, 카드 중첩과 과한 프레임을 피한다.

## First Screen Quality

The initial screen must look like a designed product, not a raw scaffold.

Korean note: 초기 화면은 단순 스캐폴드가 아니라 디자인된 제품처럼 보여야 한다.

- Give the first viewport a clear focal area, primary action, and readable information structure.
- Use soft pastel surfaces or accents with neutral backgrounds for a calm first impression.
- Balance whitespace and density so the screen feels friendly but still useful.
- Add realistic empty, loading, or sample states when data is not available yet.
- Align headers, forms, lists, and action bars to a consistent spacing grid.

Korean note: 첫 화면에는 명확한 초점, 주요 액션, 부드러운 색감, 정돈된 간격, 실제 사용 상태가 보여야 한다.

## Operational Tools

For admin, CRM, SaaS, dashboard, and CRUD tools:

- Prefer dense but organized layouts.
- Use predictable navigation.
- Keep filters, actions, and table controls easy to scan.
- Avoid oversized hero sections and decorative marketing composition.

Korean note: 업무형 도구는 조밀하지만 정리된 레이아웃과 예측 가능한 탐색을 우선한다.

## Responsive Layout

- Ensure text does not overflow buttons, cards, tabs, or table cells.
- Use responsive constraints such as `minmax`, `max-width`, `aspect-ratio`, and stable grid tracks.
- Do not scale font size directly with viewport width.
- Avoid text overlap at mobile and desktop widths.

Korean note: 모바일과 데스크톱에서 텍스트가 겹치거나 넘치지 않도록 안정적인 제약을 둔다.

## Forms

- Group related fields.
- Keep primary actions near the completion point.
- Put destructive actions away from primary actions.
- Show validation close to the field that caused it.

Korean note: 관련 필드를 묶고, 검증 메시지는 원인이 되는 입력 근처에 보여준다.
