"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const q = searchParams.get("q");

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSubmit();
  };

  return (
    <div className="flex gap-4" role="search">
      <input
        className="h-12 w-full items-center rounded-[4px] border border-lightGray px-3 py-3 text-sm text-textBlack outline-none placeholder:text-gray focus:border-main"
        type="search"
        placeholder="레시피를 검색해보세요!"
        autoComplete="off"
        value={search}
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
      />
      <button
        className="h-12 min-w-24 rounded-[4px] border border-main bg-main px-3 text-sm font-bold text-white"
        onClick={onSubmit}
      >
        검색
      </button>
    </div>
  );
}
