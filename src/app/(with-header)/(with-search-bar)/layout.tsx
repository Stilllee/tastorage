import AddRecipeButton from "@/app/components/AddRecipeButton";
import SearchBar from "@/app/components/SearchBar";
import { Suspense } from "react";

export default function WithSearchBarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAdmin = true;

  return (
    <>
      <Suspense>
        <SearchBar />
      </Suspense>
      {children}
      {isAdmin && <AddRecipeButton />}
    </>
  );
}
