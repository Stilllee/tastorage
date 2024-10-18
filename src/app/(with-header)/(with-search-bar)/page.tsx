import { RecipeData } from "@/types";
import RecipeItem from "@/app/components/RecipeItem";

const REVALIDATE_TIME_24_HOURS = 86400;

export const revalidate = REVALIDATE_TIME_24_HOURS;

async function AllRecipes() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/recipe`, {
    next: { revalidate: REVALIDATE_TIME_24_HOURS },
  });
  if (!res.ok) return <p>오류가 발생했습니다.</p>;

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

export default function Home() {
  return (
    <>
      <h2 className="sr-only">레시피 목록</h2>
      <AllRecipes />
    </>
  );
}
