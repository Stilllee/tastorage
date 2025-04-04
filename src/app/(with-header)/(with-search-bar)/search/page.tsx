import LoadingSpinner from "@/app/components/loading/LoadingSpinner";
import { RecipeData } from "@/types";
import RecipeItem from "@/app/components/RecipeItem";
import { Suspense } from "react";
import { Metadata } from "next";

async function SearchResult({ q }: { q: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/recipe/search?q=${q}`,
  );
  if (!res.ok) {
    throw new Error(
      `검색결과를 가져오지 못했습니다: ${res.status} ${res.statusText}`,
    );
  }

  const searchRecipes: RecipeData[] = await res.json();
  return (
    <ul className="my-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {searchRecipes.map((recipe) => (
        <li key={recipe.id}>
          <RecipeItem {...recipe} />
        </li>
      ))}
    </ul>
  );
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  const { q } = await searchParams;

  return {
    title: `${q} 검색결과 | 테이스토리지`,
    description: `${q}로 검색한 레시피 목록입니다.`,
    openGraph: {
      title: `${q} 검색결과 | 테이스토리지`,
      description: `${q}로 검색한 레시피 목록입니다.`,
      images: ["/thumbnail.png"],
    },
  };
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  return (
    <>
      <h2 className="sr-only">레시피 검색 결과</h2>
      <div className="flex flex-col items-center">
        <Suspense key={q || ""} fallback={<LoadingSpinner />}>
          <SearchResult q={q || ""} />
        </Suspense>
      </div>
    </>
  );
}
