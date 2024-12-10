"use client";

import { useActionState, useEffect, useState } from "react";

import Button from "./Button";
import IngredientInput from "./IngredientInput";
import { RecipeData } from "@/types";
import { recipeFormAction } from "../actions/recipe-form.action";
import { useRouter } from "next/navigation";

interface RecipeFormProps {
  initialData?: RecipeData;
}

export default function RecipeForm({ initialData }: RecipeFormProps) {
  const router = useRouter();
  const [ingredients, setIngredients] = useState<string[]>(
    initialData?.ingredient ?? [],
  );
  const [state, formAction, isPending] = useActionState(recipeFormAction, null);

  useEffect(() => {
    if (state?.error) {
      alert(state.error);
    }
    if (state?.status) {
      console.log("이동할 URL:", initialData ? `/${initialData.id}` : "/");
      router.replace(initialData ? `/recipe/${initialData.id}` : "/");
    }
  }, [state, router, initialData]);

  const handleAddIngredient = (newIngredient: string) => {
    setIngredients([...ingredients, newIngredient]);
  };

  const handleRemoveIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, idx) => idx !== index));
  };

  const handleRemoveLastIngredient = () => {
    setIngredients(ingredients.slice(0, -1));
  };

  const handleAction = (formData: FormData) => {
    formData.append("ingredient", JSON.stringify(ingredients));
    formAction(formData);
  };

  return (
    <form
      action={handleAction}
      className="mx-auto flex h-full max-w-screen-md flex-col justify-center"
    >
      {initialData && (
        <input type="hidden" name="recipeId" value={initialData.id} />
      )}
      <label htmlFor="recipe-title" className="sr-only">
        레시피 제목
      </label>
      <input
        id="recipe-title"
        type="text"
        name="title"
        placeholder="레시피 제목을 입력해주세요"
        required
        defaultValue={initialData?.title}
        disabled={isPending}
        className="text-3xl font-medium outline-none"
      />
      <div className="my-4">
        <label htmlFor="recipe-servings" className="sr-only">
          몇 인분
        </label>
        <input
          id="recipe-servings"
          type="number"
          name="servings"
          min="1"
          placeholder="n"
          required
          defaultValue={initialData?.servings}
          disabled={isPending}
          className="max-w-6 p-1 outline-none [appearance:textfield] placeholder:text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <span className="font-semibold">인분</span>
      </div>
      <IngredientInput
        isPending={isPending}
        ingredients={ingredients}
        onAdd={handleAddIngredient}
        onRemove={handleRemoveIngredient}
        onRemoveLast={handleRemoveLastIngredient}
      />
      <label htmlFor="recipe-directions" className="sr-only">
        조리 방법
      </label>
      <textarea
        id="recipe-directions"
        name="directions"
        placeholder="레시피를 작성해주세요"
        required
        defaultValue={initialData?.directions}
        disabled={isPending}
        className="mt-4 h-3/5 resize-none rounded-md border border-lightGray px-5 py-4 shadow-sm outline-none"
      ></textarea>
      <div className="right-0 mt-5 flex justify-end">
        <Button
          type="button"
          onClick={() => router.replace("/")}
          className="mr-3 rounded-md border-gray"
        >
          취소
        </Button>
        <Button
          type="submit"
          disabled={isPending}
          className="rounded-md border-main bg-main text-white"
        >
          {isPending ? "저장 중.." : initialData ? "수정" : "등록"}
        </Button>
      </div>
    </form>
  );
}
