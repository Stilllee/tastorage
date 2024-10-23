import Link from "next/link";
import { PiNotePencilBold } from "react-icons/pi";

export default function AddRecipeButton() {
  return (
    <Link
      href={"/new"}
      aria-label="레시피 작성하기"
      className="fixed bottom-8 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-main"
    >
      <PiNotePencilBold className="text-3xl text-white" />
    </Link>
  );
}
