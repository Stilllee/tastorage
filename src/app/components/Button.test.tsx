import "@testing-library/jest-dom";
import Button from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button 컴포넌트", () => {
  it("기본 버튼이 정상적으로 렌더링되어야 한다", () => {
    render(<Button>테스트 버튼</Button>);
    const testButton = screen.getByRole("button");
    expect(testButton).toBeInTheDocument();
    expect(testButton).toHaveTextContent("테스트 버튼");
    expect(testButton).toHaveAttribute(
      "class",
      "text-md text-nowrap border px-3 py-1 ",
    );
  });

  it("className prop이 정상적으로 적용되어야 한다", () => {
    render(<Button className="custom-class">테스트 버튼</Button>);
    const testButton = screen.getByRole("button");
    expect(testButton).toHaveAttribute(
      "class",
      "text-md text-nowrap border px-3 py-1 custom-class",
    );
  });

  it("HTML button 요소의 기본 속성들이 정상적으로 전달되어야 한다", () => {
    render(
      <Button type="submit" disabled>
        테스트 버튼
      </Button>,
    );
    const testButton = screen.getByRole("button");
    expect(testButton).toHaveAttribute("type", "submit");
    expect(testButton).toBeDisabled();
  });
});
