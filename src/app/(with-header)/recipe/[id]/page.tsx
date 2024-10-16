import IngredientItem from "@/app/components/IngredientItem";
import { RecipeData } from "@/types";

const recipe: RecipeData = {
  id: 2,
  title: "소고기 미역국",
  servings: 4,
  ingredient: ["소고기", "미역", "멸치액젓", "다진마늘", "국간장", "참기름"],
  directions:
    "1. 미역 10g을 불린다.\n2. 참기름 2T, 소고기 100g을 중약불에서 볶는다.\n3. 소고기가 익으면 불린 미역을 넣어 볶는다.\n4. 국간장 3T 넣어 볶고 물 1.3L를 넣어 끓인다.\n5. 물이 끓으면 다진마늘을 넣고, 마지막에 멸치액젓 1과1/2T를 넣어 간을 맞춘다.",
};

export default function Page({ params }: { params: { id: string } }) {
  const { title, servings, ingredient, directions } = recipe;

  return (
    <article className="py-3">
      {/* {params.id} recipe detail page */}
      <h2 className="text-2xl font-bold">{title}</h2>
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
        <p className="text-textGray whitespace-pre-line leading-8">
          {directions}
        </p>
      </section>
    </article>
  );
}
