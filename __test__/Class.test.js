import { Class } from "../src/model/Class.model.js";
import { ERROR } from "../src/constants/index.js";
import __mock__Data from "../__mock__/classes_specs_data.mock.json";

describe("Class 모델 테스트 - 실제 mock 데이터 기반", () => {
  const mockData = __mock__Data;

  const mockDTOs = mockData.map((cls) => ({
    getClassName: () => cls.name,
    getSpecs: () => cls.specs.map((s) => s.name),
  }));

  test("빈 값일때 예외 발생", () => {
    expect(() => new Class([])).toThrow(ERROR.EMPTY);
  });

  test("className 객체 배열 반환", () => {
    const classModel = new Class(mockDTOs);
    const result = classModel.getTransformClassName();

    expect(result).toEqual([
      { className: "Death Knight" },
      { className: "Druid" },
      { className: "Hunter" },
    ]);
  });

  test("className + classSpec 객체 배열 반환", () => {
    const classModel = new Class(mockDTOs);
    const result = classModel.getTransformSpecsByName();

    expect(result).toEqual([
      { className: "Death Knight", classSpec: ["Blood", "Frost", "Unholy"] },
      {
        className: "Druid",
        classSpec: ["Balance", "Feral", "Guardian", "Restoration"],
      },
      {
        className: "Hunter",
        classSpec: ["Beast Mastery", "Marksmanship", "Survival"],
      },
    ]);
  });
});
