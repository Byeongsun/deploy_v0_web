# 🚀 배포 가이드

이 문서는 ATELIER 웹사이트를 무료로 배포하는 방법을 안내합니다.

## 📋 목차
1. [Vercel 배포 (추천)](#1-vercel-배포-추천)
2. [Netlify 배포](#2-netlify-배포)
3. [Railway 배포](#3-railway-배포)
4. [배포 전 체크리스트](#배포-전-체크리스트)

---

## 1. Vercel 배포 (추천) ⭐

Vercel은 Next.js를 만든 회사에서 제공하는 플랫폼으로, Next.js 프로젝트에 가장 최적화되어 있습니다.

### 장점
- ✅ 완전 무료 (개인 프로젝트)
- ✅ 자동 HTTPS 인증서
- ✅ 자동 CI/CD (GitHub 연동)
- ✅ 글로벌 CDN
- ✅ 환경 변수 관리
- ✅ 커스텀 도메인 지원
- ✅ 프리뷰 배포 (PR별)

### 배포 단계

#### 방법 1: GitHub 연동 (추천)

1. **GitHub에 코드 푸시**
   ```bash
   # Git 저장소 초기화 (아직 안 했다면)
   git init
   git add .
   git commit -m "Initial commit"
   
   # GitHub에 새 저장소 생성 후
   git remote add origin https://github.com/사용자명/저장소명.git
   git branch -M main
   git push -u origin main
   ```

2. **Vercel 가입 및 로그인**
   - https://vercel.com 접속
   - "Sign Up" 클릭
   - GitHub 계정으로 로그인 (권장)

3. **프로젝트 임포트**
   - Vercel 대시보드에서 "Add New..." → "Project" 클릭
   - GitHub 저장소 선택
   - 프로젝트 설정:
     - **Framework Preset**: Next.js (자동 감지)
     - **Root Directory**: `./` (기본값)
     - **Build Command**: `npm run build` (자동 설정됨)
     - **Output Directory**: `.next` (자동 설정됨)
     - **Install Command**: `npm install` (자동 설정됨)

4. **환경 변수 설정** (필요한 경우)
   - "Environment Variables" 섹션에서 추가
   - 예: `NEXT_PUBLIC_API_URL`, `DATABASE_URL` 등

5. **배포 실행**
   - "Deploy" 버튼 클릭
   - 약 1-2분 후 배포 완료
   - 자동으로 생성된 URL 확인 (예: `프로젝트명.vercel.app`)

#### 방법 2: Vercel CLI 사용

1. **Vercel CLI 설치**
   ```bash
   npm install -g vercel
   ```

2. **로그인**
   ```bash
   vercel login
   ```

3. **배포**
   ```bash
   # 프로젝트 루트에서 실행
   vercel
   
   # 프로덕션 배포
   vercel --prod
   ```

### Vercel 설정 파일 (선택사항)

프로젝트 루트에 `vercel.json` 파일을 생성하여 추가 설정 가능:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["icn1"]
}
```

---

## 2. Netlify 배포

Netlify도 Next.js를 잘 지원하는 인기 있는 플랫폼입니다.

### 배포 단계

1. **GitHub에 코드 푸시** (위와 동일)

2. **Netlify 가입 및 로그인**
   - https://www.netlify.com 접속
   - GitHub 계정으로 로그인

3. **프로젝트 임포트**
   - "Add new site" → "Import an existing project"
   - GitHub 저장소 선택

4. **빌드 설정**
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Next.js Runtime**: `next` (자동 감지)

5. **환경 변수 설정** (필요한 경우)
   - Site settings → Environment variables

6. **배포 실행**
   - "Deploy site" 클릭
   - 배포 완료 후 URL 확인 (예: `프로젝트명.netlify.app`)

### Netlify 설정 파일

프로젝트 루트에 `netlify.toml` 파일 생성:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## 3. Railway 배포

Railway는 간단한 설정으로 배포할 수 있는 플랫폼입니다.

### 배포 단계

1. **Railway 가입**
   - https://railway.app 접속
   - GitHub 계정으로 로그인

2. **새 프로젝트 생성**
   - "New Project" 클릭
   - "Deploy from GitHub repo" 선택
   - 저장소 선택

3. **서비스 설정**
   - 자동으로 Next.js 감지
   - 빌드 명령어: `npm run build`
   - 시작 명령어: `npm start`

4. **환경 변수 설정** (필요한 경우)
   - Variables 탭에서 추가

5. **도메인 설정**
   - Settings → Generate Domain 클릭
   - 커스텀 도메인도 설정 가능

---

## 배포 전 체크리스트 ✅

배포하기 전에 다음 사항들을 확인하세요:

### 필수 확인 사항

- [ ] `package.json`에 빌드 스크립트가 있는지 확인 (`"build": "next build"`)
- [ ] `.gitignore`에 `node_modules`, `.next` 등이 포함되어 있는지 확인
- [ ] 환경 변수가 있다면 배포 플랫폼에 설정했는지 확인
- [ ] 로컬에서 `npm run build`가 성공하는지 확인
- [ ] 이미지 경로가 올바른지 확인 (`/public` 폴더 사용)
- [ ] 외부 API 호출이 있다면 CORS 설정 확인

### 권장 확인 사항

- [ ] `next.config.mjs` 설정 확인
- [ ] 메타데이터 (`app/layout.tsx`) 확인
- [ ] 에러 페이지 커스터마이징 (선택사항)
- [ ] Google Analytics 또는 기타 추적 도구 설정 (이미 `@vercel/analytics` 포함됨)

### 빌드 테스트

로컬에서 빌드 테스트:

```bash
# 의존성 설치
npm install

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

---

## 환경 변수 관리

### Vercel에서 환경 변수 설정

1. 프로젝트 대시보드 → Settings → Environment Variables
2. 변수 추가:
   - **Name**: `NEXT_PUBLIC_API_URL`
   - **Value**: `https://api.example.com`
   - **Environment**: Production, Preview, Development 선택

### 로컬 개발용 환경 변수

프로젝트 루트에 `.env.local` 파일 생성 (Git에 커밋하지 않음):

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
DATABASE_URL=your_database_url
```

---

## 커스텀 도메인 설정

### Vercel에서 도메인 추가

1. 프로젝트 → Settings → Domains
2. "Add Domain" 클릭
3. 도메인 입력 (예: `atelier.com`)
4. DNS 설정 안내에 따라 레코드 추가:
   - **A Record**: `@` → Vercel IP 주소
   - **CNAME Record**: `www` → `cname.vercel-dns.com`
5. SSL 인증서 자동 발급 (몇 분 소요)

---

## 트러블슈팅

### 빌드 실패 시

1. **로컬에서 빌드 테스트**
   ```bash
   npm run build
   ```

2. **에러 로그 확인**
   - Vercel/Netlify 대시보드의 Build Logs 확인
   - TypeScript 에러, 의존성 문제 등 확인

3. **일반적인 문제**
   - `node_modules` 캐시 문제 → 플랫폼 설정에서 "Clear cache and deploy" 실행
   - 메모리 부족 → `package.json`에서 불필요한 의존성 제거
   - 타임아웃 → 빌드 시간이 길면 플랫폼 제한 확인

### 이미지가 표시되지 않을 때

- `next.config.mjs`에서 `images.unoptimized: true` 설정 확인
- 이미지 경로가 `/public` 폴더 기준인지 확인
- 외부 이미지 사용 시 `next.config.mjs`에 도메인 추가 필요

---

## 무료 플랜 제한사항

### Vercel 무료 플랜
- ✅ 무제한 프로젝트
- ✅ 100GB 대역폭/월
- ✅ 자동 HTTPS
- ⚠️ 서버리스 함수 실행 시간 제한
- ⚠️ 빌드 시간 제한

### Netlify 무료 플랜
- ✅ 100GB 대역폭/월
- ✅ 300분 빌드 시간/월
- ✅ 자동 HTTPS

### Railway 무료 플랜
- ✅ $5 크레딧/월 (제한적)
- ⚠️ 사용량 초과 시 결제 필요

---

## 추가 리소스

- [Vercel 공식 문서](https://vercel.com/docs)
- [Next.js 배포 가이드](https://nextjs.org/docs/deployment)
- [Netlify Next.js 가이드](https://docs.netlify.com/integrations/frameworks/nextjs/)
- [Railway 문서](https://docs.railway.app/)

---

## 도움이 필요하신가요?

배포 중 문제가 발생하면:
1. 배포 플랫폼의 로그 확인
2. Next.js 공식 문서 참조
3. GitHub Issues 검색

**행운을 빕니다! 🎉**
