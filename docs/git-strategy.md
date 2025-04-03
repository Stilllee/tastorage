# Git 브랜치 전략 가이드

## 1. 브랜치 구조

- `main`: 배포용 브랜치
  - 안정적인 배포 버전 관리
  - 직접적인 커밋 지양 (핫픽스 제외)
- `develop`: 개발 통합 브랜치
  - 모든 개발 내용이 모이는 곳
  - 각 목적별 브랜치들의 베이스

### 목적별 브랜치

- `feature/*`: 새로운 기능 개발

  - 예: `feature/login`, `feature/signup`

- `config`: 설정 관련 변경

  - 프로젝트 설정, 환경 설정 등

- `refactor/*`: 코드 리팩토링

  - 예: `refactor/auth-logic`, `refactor/api-structure`
  - 기능 변경 없는 코드 개선

- `bug/*`: 버그 수정
  - 예: `bug/login-error`, `bug/data-fetch`
  - 기존 기능의 오류 수정

## 2. 작업 흐름

### 2.1 브랜치 생성 및 작업

1. develop에서 목적에 맞는 브랜치 생성

```bash
git switch develop
git pull origin develop

# 목적에 따른 브랜치 생성
git checkout -b feature/new-feature
```

2. 작업 및 커밋

```bash
git add .
git commit -m "[feat] 새로운 기능 구현"
```

### 2.2 브랜치 동기화

```bash
# 1. 로컬 develop 브랜치 최신화
git switch develop
git pull origin develop

# 2. 작업 브랜치 동기화
git switch [브랜치명]  # ex: feature/login
git rebase develop      # 로컬 develop 기준으로 재배치
git push origin [브랜치명] --force  # 필요시
```

## 3. 커밋 메시지 규칙

```
[type] 제목

- 본문 (선택사항)
```

- type 종류 (브랜치 유형과 일치):
  - `feat`: 새로운 기능
  - `chore`: 설정 및 기다 변경사항
  - `refactor`: 리팩토링
  - `fix`: 버그 수정
  - `docs`: 문서 수정
  - `test`: 테스트 코드
  - `move`: 파일 이동
  - `typo`: 오탈자 수정
  - `style`: 스타일 코드 수정

## 4. PR 및 머지 전략

1. 모든 유형의 브랜치는 develop으로 PR

2. develop -> main은 스쿼시 머지
   - 배포 히스토리 깔끔하게 관리
   - develop 브랜치의 상세 히스토리는 보존

## 5. GitHub Actions 자동화

- PR 체크: 테스트 및 빌드 자동화
- develop -> main 자동 스쿼시 머지

## 7. 핫픽스 처리

1. main에서 직접 수정이 발생한 경우:

```bash
git switch develop
git merge main    # main의 변경사항을 develop으로 동기화
```

2. 이후 작업 브랜치 동기화:

```bash
git switch [브랜치명]
git rebase develop  # 최신 develop(핫픽스 포함) 기준으로 재배치
```
