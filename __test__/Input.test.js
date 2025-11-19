import { Input } from "../src/model/input/input.js";

describe("Input 클래스 테스트", () => {
  test("빈 값 입력 시 에러 발생", () => {
    expect(() => new Input("")).toThrow("[ERROR]");
  });

  test("존재하는 직업명 입력 → classId 반환", () => {
    const classNameToIdMap = new Map([
      ["Death Knight", 1],
      ["Druid", 2],
      ["Hunter", 3],
    ]);
    const input = new Input("Death Knight");
    const classId = input.getClassId("Death Knight", classNameToIdMap);
    expect(classId).toBe(1);
  });

  test("존재하지 않는 직업명 입력시 예외 상황 발생", () => {
    const classNameToIdMap = new Map([
      ["Death Knight", 1],
      ["Druid", 2],
      ["Hunter", 3],
    ]);
    const input = new Input("Rogue");
    expect(() => input.getClassId("Rogue", classNameToIdMap)).toThrow(
      "[ERROR]"
    );
  });

  test("존재하는 specName 입력 → specId 반환", () => {
    const classSpecNameToIdMap = new Map([
      [1, new Map([["Blood", 1], [("Frost", 2)], [("Unholy", 3)]])],
    ]);
    const input = new Input("Death Knight");
    const classId = 1;
    const specId = input.getSpecId("Blood", classSpecNameToIdMap, classId);
    expect(specId).toBe(1);
  });

  test("존재하지 않는 specName 입력시 에러 상황 발생", () => {
    const classSpecNameToIdMap = new Map([
      [1, [["Blood", 1], [("Frost", 2)], [("Unholy", 3)]]],
    ]);
    const input = new Input("Death Knight");
    const classId = 1;
    expect(() =>
      input.getSpecId("blood", classSpecNameToIdMap, classId)
    ).toThrow("[ERROR] 정확히 영웅특성 이름을 기업해 주십시오");
  });
});
