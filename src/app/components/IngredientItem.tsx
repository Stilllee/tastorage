export default function IngredientItem({
  ingredient,
  children,
}: {
  ingredient: string;
  children?: React.ReactNode;
}) {
  return (
    <li className="inline-flex text-nowrap rounded-[4px] bg-[#eff3fa] px-2 py-1 text-xs">
      {ingredient}
      {children}
    </li>
  );
}
