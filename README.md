# yume-codex

`yume-codex`는 Codex 프로젝트에 공통 하네스 구조를 설치하는 CLI입니다.

프로젝트 폴더에서 명령어를 실행하면 `AGENTS.md`와 `.codex/` 하네스 문서, 스택별 규칙, Codex 스킬을 추가합니다.

## 설치

GitHub 저장소에서 전역 설치합니다.

```bash
npm install -g github:mongchongguri/yume-codex
```

또는 Git URL로 설치할 수 있습니다.

```bash
npm install -g https://github.com/mongchongguri/yume-codex.git
```

설치 확인:

```bash
yume-codex --version
yume-codex --help
```

## 기본 사용

프로젝트 폴더로 이동한 뒤 하네스를 설치합니다.

```bash
yume-codex init
```

특정 폴더에 설치하려면 대상 경로를 지정합니다.

```bash
yume-codex init ./my-project
```

기존 하네스 파일을 덮어쓰면서 설치하려면 `--force`를 사용합니다.

```bash
yume-codex init --force
```

## 명령어

### `yume-codex init [target] [--force]`

대상 프로젝트에 `AGENTS.md`와 `.codex/` 하네스 파일을 복사합니다.

- 기본 대상은 현재 폴더입니다.
- 기존 파일이 있으면 기본적으로 건너뜁니다.
- `--force`를 붙이면 기존 하네스 파일을 덮어씁니다.

### `yume-codex rebase [target]`

설치된 `yume-codex` 버전의 하네스 기준으로 대상 프로젝트를 다시 맞춥니다.

- 기존 하네스 파일은 덮어씁니다.
- 새로 추가된 하네스 파일은 자동으로 추가합니다.
- 이전 버전에는 있었지만 현재 템플릿에서 제거된 관리 파일은 manifest 기준으로 정리합니다.
- 프로젝트 코드 자체는 수정하지 않고, 하네스 관리 대상 파일만 처리합니다.

업데이트 후 적용 흐름:

```bash
yume-codex update
yume-codex rebase
```

### `yume-codex doctor [target]`

대상 프로젝트에 필수 하네스 파일이 있는지 확인합니다.

```bash
yume-codex doctor
```

정상일 때는 `OK`를 출력하고, 누락된 파일이 있으면 목록을 출력합니다.

### `yume-codex update [ref]`

전역 설치된 `yume-codex` CLI를 GitHub에서 다시 설치합니다.

기본값은 `main` 브랜치입니다.

```bash
yume-codex update
```

태그, 브랜치, 커밋을 지정할 수도 있습니다.

```bash
yume-codex update v0.1.3
yume-codex update main
```

### `yume-codex --version`

현재 설치된 CLI 버전을 출력합니다.

```bash
yume-codex --version
```

### `yume-codex --help`

사용 가능한 명령어와 예시를 출력합니다.

```bash
yume-codex --help
```

## 포함되는 하네스 구조

주요 파일과 폴더는 다음과 같습니다.

- `AGENTS.md`: Codex가 프로젝트에서 먼저 읽는 최상위 작업 지침입니다.
- `.codex/context/`: 프로젝트 설명과 작업 판단 기준을 둡니다.
- `.codex/common/rules/`: 공통 코딩 규칙, 보고 규칙, TypeScript 규칙, 버전 관리 규칙을 둡니다.
- `.codex/common/rules/frontend/`: 프론트엔드 상태 관리, 스타일링, 아이콘, 보고 기준을 둡니다.
- `.codex/common/patterns/`: 코드 구조화 패턴을 둡니다.
- `.codex/common/design/`: 공통 UI 디자인 참고 기준을 둡니다.
- `.codex/stacks/react/`: React 프로젝트 규칙과 의사결정 기준을 둡니다.
- `.codex/stacks/expo/`: Expo 프로젝트 규칙, Expo Web 테스트 기준, 의사결정 기준을 둡니다.
- `.codex/stacks/react-native/`: React Native 프로젝트 규칙과 의사결정 기준을 둡니다.
- `.codex/skills/`: Codex에서 호출할 수 있는 프로젝트 스킬을 둡니다.
- `.codex/workflow/`: 스킬이 생성하는 요약, 작업 로그, 인수인계 파일을 둡니다.

`.codex/workflow/**/*.md` 파일은 작업 중 생성되는 기록물이므로 git과 패키지 배포 대상에서 제외됩니다. 폴더 유지를 위한 `.gitkeep`만 포함됩니다.

## 포함된 스킬

스킬은 Codex에서 `/스킬명` 또는 `$스킬명` 형태로 호출하는 것을 기준으로 합니다.

### `/summary`

현재 대화 맥락을 요약해서 새 파일로 저장합니다.

저장 위치:

```text
.codex/workflow/summary/YYYYMMDD-HHMMSS-summary.md
```

포함 내용:

- 사용자 목표와 선호사항
- 대화 중 결정된 내용
- 완료된 작업
- 열린 질문
- 다음 작업

### `/worklog`

현재 저장소 작업 상태를 점검해서 작업 로그 파일로 저장합니다.

저장 위치:

```text
.codex/workflow/worklog/YYYYMMDD-HHMMSS-worklog.md
```

주로 확인하는 내용:

- 현재 브랜치와 upstream
- staged 변경사항
- unstaged 변경사항
- 최근 커밋
- 실행한 검증 명령과 결과
- 아직 커밋, 검토, 후속 작업이 필요한 파일

### `/handoff`

다른 Codex 세션이 이어서 작업할 수 있도록 인수인계 문서를 저장합니다.

저장 위치:

```text
.codex/workflow/handoff/YYYYMMDD-HHMMSS-handoff.md
```

포함 내용:

- 현재 목표와 진행 상태
- 이미 결정된 중요한 사항
- 변경했거나 관련 있는 파일
- 실행한 명령과 결과
- 알려진 위험 또는 미해결 질문
- 다음 권장 작업

### `/read-summary`

`.codex/workflow/summary/` 폴더에서 최신 summary 파일을 읽고 그 맥락에서 작업을 이어갑니다.

summary 파일이 없으면 먼저 `/summary`를 사용해 저장하라고 안내합니다.

### `/read-worklog`

`.codex/workflow/worklog/` 폴더에서 최신 worklog 파일을 읽고 저장소 작업 상태를 이어갑니다.

worklog 파일이 없으면 먼저 `/worklog`를 사용해 저장하라고 안내합니다.

### `/read-handoff`

`.codex/workflow/handoff/` 폴더에서 최신 handoff 파일을 읽고 인수인계 내용 기준으로 작업을 이어갑니다.

handoff 파일이 없으면 먼저 `/handoff`를 사용해 저장하라고 안내합니다.

## 업데이트 흐름

하네스 저장소에 새 규칙이나 스킬이 추가되면 다음 순서로 적용합니다.

```bash
yume-codex update
yume-codex rebase
yume-codex doctor
```

`update`는 전역 CLI를 최신 GitHub 기준으로 다시 설치합니다.

`rebase`는 현재 프로젝트의 `AGENTS.md`와 `.codex/` 하네스를 설치된 CLI 버전 기준으로 다시 적용합니다.

`doctor`는 필수 파일 누락 여부를 확인합니다.

## 버전 관리

버전은 `package.json`의 `version`으로 관리합니다.

릴리스 작업 예시:

```bash
npm version patch --no-git-tag-version
```

그 다음 `CHANGELOG.md`를 갱신하고 커밋, 태그, 푸시합니다.

```bash
git add .
git commit -m "Release v0.1.3"
git tag v0.1.3
git push origin main --tags
```

특정 버전으로 고정 설치하려면 태그를 지정합니다.

```bash
npm install -g github:mongchongguri/yume-codex#v0.1.3
yume-codex rebase
```

## GitHub 저장소 설정

이 패키지는 다음 기준으로 설정되어 있습니다.

- 패키지 이름: `yume-codex`
- CLI 명령어: `yume-codex`
- 저장소: `https://github.com/mongchongguri/yume-codex.git`

원격 저장소가 아직 연결되지 않았다면 먼저 등록합니다.

```bash
git remote add origin https://github.com/mongchongguri/yume-codex.git
```

푸시:

```bash
git push -u origin main
```
