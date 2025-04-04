import "./globals.css";

import { AdminProvider } from "@/contexts/AdminContext";
import type { Metadata } from "next";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "테이스토리지",
  description: "레시피를 저장하고 관리할 수 있는 맛있는 서랍, 테이스토리지",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>
        <AdminProvider>{children}</AdminProvider>
      </body>
    </html>
  );
}
