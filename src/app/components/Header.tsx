import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between px-8 shadow">
      <h1>
        <Link href="/" className="py-5 text-xl font-semibold text-main">
          TASTORAGE
        </Link>
      </h1>
      <Link
        href="/new"
        className="border-gray text-md text-nowrap rounded-lg border px-3 py-1"
      >
        글쓰기
      </Link>
    </header>
  );
}
