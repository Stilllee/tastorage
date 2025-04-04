import AdminLoginForm from "@/app/components/AdminLoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "관리자 로그인 | 테이스토리지",
  description: "테이스토리지 관리자 로그인 페이지입니다.",
  openGraph: {
    title: "관리자 로그인 | 테이스토리지",
    description: "테이스토리지 관리자 로그인 페이지입니다.",
    images: ["/thumbnail.png"],
  },
  robots: "noindex, nofollow",
};

export default function Page() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <AdminLoginForm />
    </div>
  );
}
