"use client";

import { RiMoreLine } from "react-icons/ri";
import { useState } from "react";

export default function MoreOptionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const optionBtnStyle = `rounded-lg px-3 py-2 hover:bg-[#e9ecef] `;

  return (
    <>
      <button
        className="absolute right-0 top-3 rounded-md p-2 hover:bg-[#eff3fa]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiMoreLine />
      </button>
      {isOpen && (
        <div className="absolute right-0 top-12 flex w-20 flex-col rounded-lg border border-[#e9ecef] bg-white p-1 shadow-sm transition-all">
          <button className={optionBtnStyle}>수정</button>
          <button className={optionBtnStyle}>삭제</button>
        </div>
      )}
    </>
  );
}
