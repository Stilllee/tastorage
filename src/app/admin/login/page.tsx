"use client";

import { GrFormView, GrFormViewHide } from "react-icons/gr";

import { useState } from "react";

export default function Page() {
  const [isHide, setIsHide] = useState(true);

  const toggleHide = () => setIsHide(!isHide);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <form className="flex w-full max-w-xl flex-col items-center gap-6 px-8 py-5">
        <span className="text-xl font-semibold text-main">TASTORAGE</span>
        <div className="relative w-full">
          <input
            className="h-12 w-full items-center rounded-[4px] border border-lightGray px-3 py-3 text-sm text-textBlack outline-none placeholder:text-gray focus:border-main"
            type={isHide ? "password" : "text"}
            placeholder="비밀번호"
            autoComplete="off"
          />
          <button
            type="button"
            className="main absolute right-3 top-1/2 -translate-y-1/2 text-2xl"
            onClick={toggleHide}
          >
            {isHide ? <GrFormViewHide /> : <GrFormView />}
          </button>
        </div>
        <button className="h-12 w-full rounded-[4px] border border-main bg-main px-3 text-sm font-bold text-white">
          관리자 로그인
        </button>
      </form>
    </div>
  );
}
