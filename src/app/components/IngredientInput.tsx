"use client";

import IngredientItem from "./IngredientItem";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

interface IngredientInputProps {
  ingredients: string[];
  onAdd: (newIngredient: string) => void;
  onRemove: (index: number) => void;
  onRemoveLast: () => void;
}

export default function IngredientInput({
  ingredients,
  onAdd,
  onRemove,
  onRemoveLast,
}: IngredientInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === "Enter") {
      e.preventDefault();

      if (inputValue.trim()) {
        const cleanedValue = inputValue.replace(/\s+/g, "");
        onAdd(cleanedValue);
        setInputValue("");
      }
      return;
    }

    if (e.key === "Backspace" && !inputValue) {
      e.preventDefault();
      onRemoveLast();
    }
  };

  return (
    <div>
      <label htmlFor="recipe-ingredient" className="sr-only">
        재료
      </label>
      <ul className="*:mr-2">
        {ingredients.map((ing, idx) => (
          <IngredientItem key={ing} ingredient={ing}>
            <button
              type="button"
              aria-label={`${ing} 삭제`}
              onClick={() => onRemove(idx)}
              className="ml-1 text-base"
            >
              <IoCloseSharp />
            </button>
          </IngredientItem>
        ))}
        <input
          id="recipe-ingredient"
          type="text"
          name="ingredient"
          placeholder="재료를 추가하세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="align-middle outline-none"
        />
      </ul>
    </div>
  );
}
