import { RecipeData } from "@/types";
import RecipeItem from "@/app/components/RecipeItem";

export default async function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/recipe/search?q=${searchParams.q}`,
    { cache: "force-cache" },
  );
  if (!res.ok) return <p>오류가 발생했습니다.</p>;

  const searchRecipes: RecipeData[] = await res.json();

  return (
    <>
      <h2 className="sr-only">레시피 검색 결과</h2>
      <ul className="my-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {searchRecipes.map((recipe) => (
          <li key={recipe.id}>
            <RecipeItem {...recipe} />
          </li>
        ))}
      </ul>
    </>
  );
}
