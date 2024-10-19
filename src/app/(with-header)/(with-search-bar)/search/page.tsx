import LoadingSpinner from "@/app/components/loading/LoadingSpinner";
import { RecipeData } from "@/types";
import RecipeItem from "@/app/components/RecipeItem";
import { Suspense } from "react";

async function SearchResult({ q }: { q: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/recipe/search?q=${q}`,
  );
  if (!res.ok) return <p>오류가 발생했습니다.</p>;

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

export default async function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  return (
    <>
      <h2 className="sr-only">레시피 검색 결과</h2>
      <div className="flex flex-col items-center">
        <Suspense key={searchParams.q || ""} fallback={<LoadingSpinner />}>
          <SearchResult q={searchParams.q || ""} />
        </Suspense>
      </div>
    </>
  );
}
