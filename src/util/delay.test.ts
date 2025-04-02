import { delay } from "./delay";

describe("delay 함수", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("지정된 시간(1000ms) 후에 Promise가 resolve되어야 한다", async () => {
    const ms = 1000;
    const promise = delay(ms);

    // 타이머를 ms만큼 진행
    jest.advanceTimersByTime(ms);

    // Promise가 resolve 되었는지 확인
    await expect(promise).resolves.toBe("");
  });
});
