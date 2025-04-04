import RecipeForm from "@/app/components/RecipeForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "레시피 작성 | 테이스토리지",
  description: "새로운 레시피를 추가해보세요!",
  openGraph: {
    title: "레시피 작성 | 테이스토리지",
    description: "새로운 레시피를 추가해보세요!",
    images: ["/thumbnail.png"],
  },
  robots: "noindex, nofollow",
};

export default function Page() {
  return (
    <>
      <h2 className="sr-only">레시피 작성</h2>
      <RecipeForm />
    </>
  );
}
