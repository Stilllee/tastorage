"use server";

import { revalidatePath } from "next/cache";

export async function createRecipeAction(_: any, formData: FormData) {
  const title = formData.get("title");
  const servings = formData.get("servings");
  const directions = formData.get("directions");
  const ingredients_array = formData.get("ingredients_array") as string;

  try {
    const requestBody = {
      title,
      servings: Number(servings),
      ingredient: ingredients_array ? JSON.parse(ingredients_array) : [],
      directions,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/recipe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      },
    );

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    revalidatePath("/");
    return { status: true, error: "" };
  } catch (error) {
    console.error(error);
    return { status: false, error: `레시피 저장에 실패했습니다: ${error}` };
  }
}
