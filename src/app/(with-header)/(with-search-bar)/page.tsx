import { RecipeData } from "@/types";
import RecipeItem from "@/app/components/RecipeItem";
import RecipeListSkeleton from "@/app/components/loading/RecipeListSkeleton";
import { Suspense } from "react";
import { Metadata } from "next";

async function AllRecipes() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/recipe`);
  if (!res.ok) {
    throw new Error(
      `레시피 목록을 가져오지 못했습니다: ${res.status} ${res.statusText}`,
    );
  }

  const allRecipes: RecipeData[] = await res.json();

  return (
    <ul className="my-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {allRecipes.map((recipe) => (
        <li key={recipe.id}>
          <RecipeItem {...recipe} />
        </li>
      ))}
    </ul>
  );
}

export const metadata: Metadata = {
  title: "테이스토리지 | 레시피 저장 서비스",
  description: "레시피를 저장하고 관리할 수 있는 맛있는 서랍, 테이스토리지",
  keywords: [
    "레시피",
    "테이스토리지",
    "요리",
    "레시피 정보",
    "메뉴",
    "조리법",
    "음식",
    "메뉴 추천",
    "레시피 추천",
  ],
  openGraph: {
    title: "테이스토리지",
    description: "레시피를 저장하고 관리할 수 있는 맛있는 서랍, 테이스토리지",
    url: "https://tastorage.vercel.app/",
    type: "website",
    locale: "ko_KR",
    siteName: "테이스토리지",
    images: ["/thumbnail.png"],
  },
  alternates: {
    canonical: "https://tastorage.vercel.app/",
  },
};

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
