"use client";

import Button from "./Button";
import Link from "next/link";
import { useAdmin } from "@/contexts/AdminContext";

export default function Header() {
  const { isAdmin, logout } = useAdmin();

  return (
    <header className="flex h-16 items-center justify-between px-8 shadow">
      <h1>
        <Link href="/" className="py-5 text-xl font-semibold text-main">
          TASTORAGE
        </Link>
      </h1>
      {isAdmin ? (
        <Button className="rounded-lg border-gray" onClick={logout}>
          <span>관리자</span>
          <span className="ml-1 font-bold uppercase text-main">on</span>
        </Button>
      ) : (
        <Link
          href="/admin/login"
          className="text-md text-nowrap rounded-lg border border-gray px-3 py-1"
        >
          <span>관리자</span>
          <span className="ml-1 font-bold uppercase text-lightGray">off</span>
        </Link>
      )}
    </header>
  );
}
