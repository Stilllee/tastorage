import { RecipeData } from "@/types";
import { getRecipe } from "./getRecipe";
import { notFound } from "next/navigation";

global.fetch = jest.fn();
const mockFetch = global.fetch as jest.Mock;

jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
}));

process.env.NEXT_PUBLIC_API_SERVER_URL = "https://api.example.com";

describe("getRecipe 함수", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("레시피 정보를 성공적으로 반환한다", async () => {
    const mockRecipe: RecipeData = {
      id: 1,
      title: "테스트 레시피",
      servings: 2,
      ingredient: ["테스트 재료1", "테스트 재료2"],
      directions: "테스트 조리법",
    };

    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => mockRecipe,
    });

    const result = await getRecipe("1");
    expect(global.fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/recipe/1`,
      { cache: "force-cache" },
    );

    expect(result).toEqual(mockRecipe);
  });

  it("응답코드가 404일 경우 notFound를 호출한다", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    await getRecipe("non-existent-id");
    expect(notFound).toHaveBeenCalled();
  });

  it("응답이 실패할 경우 에러를 throw한다", async () => {
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    await expect(getRecipe("1")).rejects.toThrow(
      "레시피 정보를 가져오지 못했습니다",
    );

    expect(consoleSpy).toHaveBeenCalledWith("HTTP 요청 실패: 500");
    consoleSpy.mockRestore();
  });
});
