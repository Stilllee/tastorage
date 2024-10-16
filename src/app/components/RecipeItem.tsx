import IngredientItem from "./IngredientItem";
import Link from "next/link";
import { RecipeData } from "@/types";

export default function RecipeItem(props: RecipeData) {
  return (
    <section>
      <Link
        className="flex min-h-56 flex-col justify-between rounded-lg border border-lightGray p-6 transition-all hover:-translate-y-1 hover:shadow-md"
        href={`/recipe/${props.id}`}
        aria-label={`${props.title} 레시피 상세 보기`}
      >
        <h3 className="mb-2 font-bold">{props.title}</h3>
        <ul className="flex flex-wrap gap-2">
          {props.ingredient.map((ing) => (
            <IngredientItem key={ing} ingredient={ing} />
          ))}
        </ul>
      </Link>
    </section>
  );
}
