import SearchBar from "@/app/components/SearchBar";
import { Suspense } from "react";

export default function WithSearchBarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense>
        <SearchBar />
      </Suspense>
      {children}
    </>
  );
}
