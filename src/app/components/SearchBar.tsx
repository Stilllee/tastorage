export default function SearchBar() {
  return (
    <div className="flex gap-4" role="search">
      <input
        className="border-lightGray placeholder:text-gray h-12 w-full items-center rounded-[4px] border px-3 py-3 text-sm text-textBlack outline-none focus:border-main"
        type="search"
        placeholder="레시피를 검색해보세요!"
        autoComplete="off"
      />
      <button className="h-12 min-w-24 rounded-[4px] border border-main bg-main px-3 text-sm font-bold text-white">
        검색
      </button>
    </div>
  );
}
