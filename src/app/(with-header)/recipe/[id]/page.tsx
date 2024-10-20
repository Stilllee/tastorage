import IngredientItem from "@/app/components/IngredientItem";
import { RecipeData } from "@/types";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/recipe/${params.id}`,
    { cache: "force-cache" },
  );
  if (res.status === 404) return notFound();

  if (!res.ok) {
    throw new Error(
      `레시피 정보를 가져오지 못했습니다: ${res.status} ${res.statusText}`,
    );
  }

  const { title, servings, ingredient, directions }: RecipeData =
    await res.json();

  return (
    <article className="py-3">
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
        <p className="whitespace-pre-line leading-8 text-textGray">
          {directions}
        </p>
      </section>
    </article>
  );
}
