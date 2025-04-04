import RecipeContent from "@/app/components/RecipeContent";
import { getRecipe } from "@/util/getRecipe";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const recipe = await getRecipe(id);

  return {
    title: `${recipe.title} | 테이스토리지`,
    description: `${recipe.title} 레시피 정보입니다.`,
    openGraph: {
      title: `${recipe.title} | 테이스토리지`,
      description: `${recipe.title} 레시피 정보입니다.`,
      images: ["/thumbnail.png"],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = await getRecipe(id);

  return <RecipeContent recipe={recipe} />;
}
