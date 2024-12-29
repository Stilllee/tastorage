# TASTORAGE

레시피를 저장하고 관리할 수 있는 맛있는 서랍, 테이스토리지 🍽️

## 목차

1. [개요](#개요)
2. [기술 스택](#기술-스택)
3. [주요 기능 구현](#주요-기능-구현)
   - [Server Components와 데이터 페칭](#1-server-components와-데이터-페칭)
   - [Server Actions를 활용한 데이터 관리](#2-server-actions를-활용한-데이터-관리)
   - [사용자 경험 최적화](#3-사용자-경험-최적화)
   - [관리자 기능](#4-관리자-기능)

<br />

## 개요

- **프로젝트 명**: TASTORAGE (Tasty + Storage)
- **개발 기간**: 2024.10.12 ~ 2024.12.10 (2개월)
- **배포 URL**: [https://tastorage.vercel.app](https://tastorage.vercel.app/)
- **백엔드 서버**: [TASTORAGE API Server](https://github.com/Stilllee/tastorage-server)

<br />

## 기술 스택

<details>
<summary style="font-size: 16px; font-weight: bold;">Next.js 15 (App Router)</summary>
<div style="padding: 4px 20px;">
<p>Next.js가 App Router를 공식 권장 방식으로 채택하고 있는 만큼, 변화하는 웹 개발 생태계에 맞춰 새로운 기술을 학습하고 프로젝트에 적용하고자 선택했습니다.</p>

<p>Server Components와 Server Actions의 도입으로 복잡한 상태 관리나 데이터 페칭 없이도 직관적인 데이터 처리가 가능했고, fetch 캐싱, revalidating, 동적/정적 렌더링 선택 등 다양한 캐시 전략을 활용해 더 나은 사용자 경험을 제공하고자 고민했습니다.</p>

</div>
</details>

<details style="margin: 4px 0">
<summary style="font-size: 16px; font-weight: bold;">Tailwind CSS</summary>
<div style="padding: 4px 20px;">
<p>CSS-in-JS 라이브러리 없이도 생산성 높은 스타일링이 가능하며, Next.js와의 호환성이 높고 설정이 간단하다는 점에서 선택헀습니다.</p>

<p>클래스명을 고민하거나 별도의 CSS 파일을 관리할 필요 없이 유틸리티 클래스만으로 일관된 스타일을 구현할 수 있었고, 특히 미디어 쿼리 없이 직관적인 반응형 디자인이 가능해 개발 효율이 높았습니다.</p>
</div>
</details>

<details>
<summary style="font-size: 16px; font-weight: bold;">TypeScript</summary>
<div style="padding: 4px 20px;">
<p>타입 시스템을 통해 안정적이고 유지보수가 용이한 코드베이스를 만들고자 사용했습니다.</p>

<p>컴포넌트 props부터 API 응답, 폼 데이터까지 프로젝트 전반의 데이터 흐름에서 타입 안정성을 확보할 수 있었고, IDE의 자동완성 기능을 활용하면서 개발 생산성도 크게 향상되었습니다.</p>
</div>
</details>

<br />

## 주요 기능 구현

### 1. Server Components와 데이터 페칭

Server Components를 활용하여 서버사이드에서 데이터를 처리하고, 클라이언트로 전송되는 JavaScript 번들 크기를 최소화했습니다.

```ts
// 레시피 목록 조회 - Server Component

export default async function AllRecipes() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/recipe`, {
    next: { revalidate: REVALIDATE_TIME_24_HOURS },
  });

  const allRecipes: RecipeData[] = await res.json();
  return (
    <ul>
      {allRecipes.map((recipe) => (
        <RecipeItem key={recipe.id} {...recipe} />
      ))}
    </ul>
  );
}
```

<br />

### 2. Server Actions를 활용한 데이터 관리

Server Actions를 사용하여 폼 제출과 데이터 변경을 처리하고, 캐시 무효화를 통해 UI를 자동으로 업데이트합니다.

```ts
// 레시피 생성/수정 - Server Action

export async function recipeFormAction(_: any, formData: FormData) {
  try {
    const requestBody = {
      title: formData.get("title"),
      servings: Number(formData.get("servings")),
      ingredient: JSON.parse(formData.get("ingredients_array") as string),
      directions: formData.get("directions"),
    };

    // ... API 호출 로직

    revalidatePath("/"); // 캐시 무효화
    return { status: true };
  } catch (error) {
    return { status: false, error: `레시피 저장 실패: ${error}` };
  }
}
```

<br />

### 3. 사용자 경험 최적화

Suspense와 스켈레톤 UI를 활용한 로딩 상태 처리, 그리고 전역 에러 컴포넌트를 통해 사용자에게 더 나은 경험을 제공합니다. 특히 데이터 로딩 중에는 스켈레톤 UI로 자연스러운 로딩을 표현하고, 에러 발생 시에는 사용자 친화적인 에러 페이지를 보여줍니다.

```ts
// 메인 페이지의 로딩/에러 처리

export default function Home() {
  return (
    <>
      <h2 className="sr-only">레시피 목록</h2>

      <Suspense
        fallback={
          <ul
            className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            role="status"
            aria-live="polite"
          >
            <RecipeListSkeleton count={6} />
          </ul>
        }
      >
        <AllRecipes />
      </Suspense>
    </>
  );
}
```

<br />

### 4. 관리자 기능

미들웨어와 쿠키를 활용한 관리자 인증 시스템을 구현했습니다.

```ts
// 미들웨어를 통한 접근 제어

export function middleware(request: NextRequest) {
  const adminToken = request.cookies.get("adminToken");

  if (
    (request.nextUrl.pathname === "/new" ||
      request.nextUrl.pathname.startsWith("/edit")) &&
    !adminToken
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
```
