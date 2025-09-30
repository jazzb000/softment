## 소프트먼트 퍼블리싱 인수인계 가이드

### 제공물 구성
- **Next.js 앱(개발환경 포함)**: `pnpm install`, `pnpm run dev`로 실행. 파일 경로/라우팅/이미지 자산이 완비됨.
- **React 컴포넌트 묶음(환경 최소)**: `components/`, `public/images/` 중심. Tailwind v4 기반 클래스가 포함되어 있으므로 수신측 프로젝트에서 Tailwind v4 사용 권장.

### 개발/디자인 규칙 요약
- **컨테이너 규격**: `components/Container.tsx` 사용. 기본 `max-w-[1145px]` + `px-4 sm:px-6 lg:px-8`.
- **이미지 자산**: 모두 `public/images/*`에 위치. 코드에서는 절대경로(`/images/...`) 사용.
- **반응형 원칙**: 모바일 퍼스트. `sm / md / lg / xl` 브레이크포인트로 상향 적용.
- **라우팅**: Next App Router. 각 경로는 `app/<route>/page.tsx`.
- **스타일**: Tailwind v4. 전역은 `app/globals.css`.

### 실행 방법(Next 앱)
1) Node 20.x, pnpm 사용 권장
2) `pnpm install`
3) `pnpm run dev`

### React-only 컴포넌트 사용법(요약)
- 수신 프로젝트에 Tailwind v4 설치 후, 전역 CSS에 `@import "tailwindcss";`와 필요한 토큰 포함
- `public/images` 복사 후, 컴포넌트에서 `/images/...` 경로로 참조 유지

### 파일 구조(요약)
- `app/`: 페이지 라우팅(Next App Router)
- `components/`: 재사용 컴포넌트(버튼, 레이아웃, 섹션 등)
- `public/images`: 디자인 에셋
- `imports/`: 원본 리소스(내부 관리용). 배포 시 `public/images`만 사용

### 납품 형태 
- 기본: Next 앱(개발환경 포함) + React-only 묶음 두 가지 모두 제공
- 사유: 실 운영/검수는 Next 앱으로 바로 가능하고, 타 스택에 통합 시 React-only 묶음이 유연함

### 유지보수 메모
- 경고/빌드 산출물은 `.gitignore`에 포함됨
- 라우트 추가 시 `Container`로 가로 폭 통일


### 페이지 라우트 / 한글 명칭
- `/` (`app/page.tsx`): 로그인(기본)
- `/brandpay` (`app/brandpay/page.tsx`): 브랜드페이
- `/customerservice` (`app/customerservice/page.tsx`): 고객센터
- `/findpw` (`app/findpw/page.tsx`): 비밀번호 찾기
- `/notice0` (`app/notice0/page.tsx`): 공지사항
- `/notice1` (`app/notice1/page.tsx`): 공지사항 상세페이지
- `/paymentservice` (`app/paymentservice/page.tsx`): 결제서비스
- `/paymentwidget` (`app/paymentwidget/page.tsx`): 결제위젯
- `/quick` (`app/quick/page.tsx`): 퀵 계좌이체
- `/signin` (`app/signin/page.tsx`): 회원가입
- `/usingcost` (`app/usingcost/page.tsx`): 이용요금

### app → src 연동 구조
- 각 `app/<route>/page.tsx`는 얇은 래퍼(thin wrapper)로, 대응하는 `src/<Page>.tsx` 컴포넌트를 `import`하여 그대로 렌더링합니다.
- 목적: Next App Router의 라우팅/메타데이터는 `app/`에서 관리하면서, 화면 구현은 `src/`에 모아 React-only 번들(`handoff-react-only/`)과의 호환성을 유지하기 위함입니다.
- 예시 매핑: `app/page.tsx → src/App.tsx`, `app/brandpay/page.tsx → src/brandpay.tsx`, `app/notice0/page.tsx → src/notice0.tsx`, `app/findpw/page.tsx → src/findpw.tsx` 등.
- 추가 가이드:
  - 새 라우트 추가 시 `src/`에 컴포넌트를 만들고, `app/<route>/page.tsx`에서 해당 컴포넌트를 `import`해 반환합니다.
  - 클라이언트 훅/이벤트를 사용하는 경우 `app/<route>/page.tsx` 상단에 `'use client'` 지시문을 유지하세요.
  - 전역 폰트/스타일/메타데이터는 `app/layout.tsx`에서 관리합니다.

