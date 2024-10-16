import RecipeItem from "@/app/components/RecipeItem";
import recipes from "@/mock/recipes.json";

export default function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.includes(searchParams.q as string),
  );

  return (
    <>
      <h2 className="sr-only">레시피 검색 결과</h2>
      <ul className="my-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id}>
            <RecipeItem {...recipe} />
          </li>
        ))}
      </ul>
    </>
  );
}
