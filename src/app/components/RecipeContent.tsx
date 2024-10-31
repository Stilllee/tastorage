"use client";

import IngredientItem from "./IngredientItem";
import MoreOptionButton from "./MoreOptionButton";
import { RecipeData } from "@/types";
import { useAdmin } from "@/contexts/AdminContext";

export default function RecipeContent({ recipe }: { recipe: RecipeData }) {
  const { isAdmin } = useAdmin();
  const { id, title, servings, ingredient, directions } = recipe;

  return (
    <article className="relative py-3">
      <h2 className="text-2xl font-bold">{title}</h2>
      {isAdmin && <MoreOptionButton recipeId={id} />}

      <span className="my-4 inline-block rounded-full bg-main px-2 py-1 text-sm font-bold text-white">
        {servings}인분
      </span>
      <section>
        <h3 className="sr-only">재료</h3>
        <ul className="flex flex-wrap gap-2">
          {ingredient.map((ing) => (
            <IngredientItem key={ing} ingredient={ing} />
          ))}
        </ul>
      </section>
      <hr className="mb-4 mt-6 border-lightGray" />
      <section>
        <h3 className="mb-2 text-lg font-semibold">조리 방법</h3>
        <p className="whitespace-pre-line leading-8 text-textGray">
          {directions}
        </p>
      </section>
    </article>
  );
}
