import RecipeItem from "@/app/components/RecipeItem";
import recipes from "@/mock/recipes.json";

export default function Home() {
  return (
    <>
      <h2 className="sr-only">레시피 목록</h2>
      <ul className="my-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <RecipeItem {...recipe} />
          </li>
        ))}
      </ul>
    </>
  );
}
