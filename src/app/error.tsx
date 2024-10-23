"use client";

import { useRouter } from "next/navigation";

export default function Error({ error }: { error: Error }) {
  const router = useRouter();

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-16">
      <h1 className="sr-only">500 - Internal Server Error</h1>
      <span
        className="block text-center text-9xl font-bold text-bgBlack"
        aria-hidden
      >
        500
      </span>
      <div className="flex flex-col items-center justify-center gap-9">
        <p className="text-3xl sm:text-4xl">앗, 뭔가 문제가 생겼어요!</p>
        <p className="max-w-lg text-center text-base sm:text-lg">
          문제를 해결중에 있습니다.
          <br /> 잠시 후 다시 시도해 주세요.
        </p>
        <button
          className="w-60 rounded-xl bg-bgBlack py-3 text-center text-white"
          onClick={() => router.replace("/")}
        >
          홈으로 돌아가기
        </button>
      </div>
    </main>
  );
}
