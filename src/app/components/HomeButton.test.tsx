import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import HomeButton from "./HomeButton";

const mockReplace = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    replace: mockReplace,
  }),
}));

const getHomeButton = () =>
  screen.getByRole("button", { name: "홈으로 돌아가기" });

describe("HomeButton 컴포넌트", () => {
  beforeEach(() => {
    render(<HomeButton />);
  });

  it("버튼이 정상적으로 렌더링되어야 한다.", () => {
    const button = getHomeButton();
    expect(button).toBeInTheDocument();
  });

  it("버튼 클릭 시 홈으로 이동해야 한다", () => {
    const button = getHomeButton();
    fireEvent.click(button);

    expect(mockReplace).toHaveBeenCalledWith("/");
  });
});
