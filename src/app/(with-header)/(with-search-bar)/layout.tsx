import SearchBar from "@/app/components/SearchBar";

export default function WithSearchBarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SearchBar />
      {children}
    </>
  );
}
