import Link from "next/link";

export default function Header() {
  const isAdmin = true;

  const adminBtnStyle =
    "text-md text-nowrap rounded-lg border border-gray px-3 py-1";

  return (
    <header className="flex h-16 items-center justify-between px-8 shadow">
      <h1>
        <Link href="/" className="py-5 text-xl font-semibold text-main">
          TASTORAGE
        </Link>
      </h1>
      {isAdmin ? (
        <button className={adminBtnStyle}>
          <span>관리자</span>
          <span className="ml-1 font-bold uppercase text-main">on</span>
        </button>
      ) : (
        <Link href="/admin/login" className={adminBtnStyle}>
          <span>관리자</span>
          <span className="ml-1 font-bold uppercase text-lightGray">off</span>
        </Link>
      )}
    </header>
  );
}
