"use client";

import Button from "./Button";
import IngredientInput from "./IngredientInput";
import { RecipeData } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface RecipeFormProps {
  initialData?: RecipeData;
}

export default function RecipeForm({ initialData }: RecipeFormProps) {
  const [ingredients, setIngredients] = useState<string[]>(
    initialData?.ingredient ?? [],
  );

  const router = useRouter();

  const handleAddIngredient = (newIngredient: string) => {
    setIngredients([...ingredients, newIngredient]);
  };

  const handleRemoveIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, idx) => idx !== index));
  };

  const handleRemoveLastIngredient = () => {
    setIngredients(ingredients.slice(0, -1));
  };

  return (
    <form className="mx-auto flex h-full max-w-screen-md flex-col justify-center">
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
          className="max-w-6 p-1 outline-none [appearance:textfield] placeholder:text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <span className="font-semibold">인분</span>
      </div>
      <IngredientInput
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
          className="rounded-md border-main bg-main text-white"
        >
          {initialData ? "수정" : "등록"}
        </Button>
      </div>
    </form>
  );
}
