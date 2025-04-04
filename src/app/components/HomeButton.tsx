"use client";

import { useRouter } from "next/navigation";

export default function HomeButton() {
  const router = useRouter();
  return (
    <button
      className="w-60 rounded-xl bg-main py-3 text-center text-white"
      onClick={() => router.replace("/")}
    >
      홈으로 돌아가기
    </button>
  );
}
