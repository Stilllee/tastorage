import RecipeItemSkeleton from "./RecipeItemSkeleton";

export default function RecipeListSkeleton({ count }: { count: number }) {
  return (
    <>
      <li className="sr-only">레시피를 불러오는 중입니다.</li>
      {new Array(count).fill(0).map((_, idx) => (
        <RecipeItemSkeleton key={`recipe-item-skeleton-${idx}`} />
      ))}
    </>
  );
}
