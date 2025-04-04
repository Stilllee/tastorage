import HomeButton from "./components/HomeButton";

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-16">
      <h1 className="sr-only">404 - Page Not Found</h1>
      <span
        className="block text-center text-9xl font-bold text-main"
        aria-hidden
      >
        404
      </span>
      <div className="flex flex-col items-center justify-center gap-9">
        <p className="text-3xl sm:text-4xl">페이지를 찾을 수 없어요.</p>
        <p className="max-w-lg text-center text-base sm:text-lg">
          페이지 주소를 다시 한번 확인해 주세요.
        </p>
        <HomeButton />
      </div>
    </main>
  );
}
