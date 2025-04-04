import { RecipeData } from "@/types";
import { notFound } from "next/navigation";

export async function getRecipe(id: string): Promise<RecipeData> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/recipe/${id}`,
    { cache: "force-cache" },
  );

  if (res.status === 404) return notFound();

  if (!res.ok) {
    console.error(`HTTP 요청 실패: ${res.status}`);
    throw new Error("레시피 정보를 가져오지 못했습니다");
  }

  return res.json();
}
