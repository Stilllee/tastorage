export default function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  return <div>검색 결과 : {searchParams.q}</div>;
}
