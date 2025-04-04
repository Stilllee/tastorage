import RecipeContent from "@/app/components/RecipeContent";
import { RecipeData } from "@/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/recipe/${id}`,
    { cache: "force-cache" },
  );

  if (!res.ok) {
    throw new Error(
      `레시피 정보를 가져오지 못했습니다: ${res.status} ${res.statusText}`,
    );
  }

  const recipe: RecipeData = await res.json();

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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/recipe/${id}`,
    { cache: "force-cache" },
  );
  if (res.status === 404) return notFound();

  if (!res.ok) {
    throw new Error(
      `레시피 정보를 가져오지 못했습니다: ${res.status} ${res.statusText}`,
    );
  }

  const recipe: RecipeData = await res.json();

  return <RecipeContent recipe={recipe} />;
}
