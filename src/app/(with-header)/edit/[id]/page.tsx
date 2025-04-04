import RecipeForm from "@/app/components/RecipeForm";
import { Metadata } from "next";
import { getRecipe } from "@/util/getRecipe";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const recipe = await getRecipe(id);

  return {
    title: `${recipe.title} 레시피 수정 | 테이스토리지`,
    description: `${recipe.title} 레시피를 수정해보세요!`,
    openGraph: {
      title: `${recipe.title} 레시피 수정 | 테이스토리지`,
      description: `${recipe.title} 레시피를 수정해보세요!`,
      images: ["/thumbnail.png"],
    },
    robots: "noindex, nofollow",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = await getRecipe(id);

  return (
    <>
      <h2 className="sr-only">레시피 수정</h2>
      <RecipeForm initialData={recipe} />
    </>
  );
}
