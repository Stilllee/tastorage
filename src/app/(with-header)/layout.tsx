import Header from "@/app/components/Header";

export default function WithHeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="page-padding h-screen-header">{children}</main>
    </>
  );
}
