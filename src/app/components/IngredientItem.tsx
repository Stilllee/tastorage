export default function IngredientItem({ ingredient }: { ingredient: string }) {
  return (
    <li className="text-nowrap rounded-[4px] bg-[#eff3fa] px-2 py-1 text-xs">
      {ingredient}
    </li>
  );
}
