export default function Page({ params }: { params: { id: string } }) {
  return <div>{params.id} recipe detail page</div>;
}
