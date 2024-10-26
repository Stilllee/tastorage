"use client";

import { GrFormView, GrFormViewHide } from "react-icons/gr";

import { adminLogin } from "../actions/auth";
import { useAdmin } from "@/contexts/AdminContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginForm() {
  const [isHide, setIsHide] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { login } = useAdmin();

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await adminLogin(password);
    if (result.error) {
      setError(result.error);
      return;
    }
    login(result.token);
    router.replace("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-xl flex-col items-center px-8 py-5"
    >
      <span className="mb-6 text-xl font-semibold text-main">TASTORAGE</span>
      <div className="relative w-full">
        <input
          className="h-12 w-full items-center rounded-[4px] border border-lightGray px-3 py-3 text-sm text-textBlack outline-none placeholder:text-gray focus:border-main"
          type={isHide ? "password" : "text"}
          placeholder="비밀번호"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="button"
          aria-label={isHide ? "비밀번호 표시하기" : "비밀번호 숨기기"}
          className="main absolute right-3 top-1/2 -translate-y-1/2 text-2xl"
          onClick={() => setIsHide(!isHide)}
        >
          {isHide ? <GrFormViewHide /> : <GrFormView />}
        </button>
      </div>
      {error && <p className="mt-1 w-full text-sm text-red-500">{error}</p>}
      <button
        type="submit"
        className="mt-6 h-12 w-full rounded-[4px] border border-main bg-main px-3 text-sm font-bold text-white"
      >
        관리자 로그인
      </button>
    </form>
  );
}
