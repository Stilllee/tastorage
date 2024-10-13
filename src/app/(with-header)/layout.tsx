import Header from "@/app/components/Header";

export default function WithHeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="px-8 py-5">{children}</main>
    </>
  );
}
