import { Class } from "../src/model/Class.model.js";
import { ERROR } from "../src/constants/index.js";
import __mock__Data from "../__mock__/classes_specs_data.mock.json";
import { ClassDTO } from "../src/dto/ClassDTO.js";

describe("Class 모델 테스트 - 실제 mock 데이터 기반", () => {
  const mockData = __mock__Data;
  test("빈 값일때 예외 발생", () => {
    expect(() => new Class([])).toThrow(ERROR.EMPTY);
  });

  test("className 객체 배열 반환", () => {
    const classDTOs = mockData.map((classInfo) => new ClassDTO(classInfo));
    const classModel = new Class(classDTOs);
    const result = classModel.getTransformClassName();
    expect(result).toEqual([
      { classId: 1, className: "Death Knight" },
      { classId: 2, className: "Druid" },
      { classId: 3, className: "Hunter" },
    ]);
  });

  test("className + classSpec 객체 배열 반환", () => {
    const classDTOs = mockData.map((classInfo) => new ClassDTO(classInfo));
    const classModel = new Class(classDTOs);
    const result = classModel.getTransformSpecsByName();

    expect(result).toEqual([
      {
        classId: 1,
        classSpec: [
          { id: 1, name: "Blood" },
          { id: 2, name: "Frost" },
          { id: 3, name: "Unholy" },
        ],
      },
      {
        classId: 2,
        classSpec: [
          { id: 1, name: "Balance" },
          { id: 2, name: "Feral" },
          { id: 3, name: "Guardian" },
          { id: 4, name: "Restoration" },
        ],
      },
      {
        classId: 3,
        classSpec: [
          { id: 1, name: "Beast Mastery" },
          { id: 2, name: "Marksmanship" },
          { id: 3, name: "Survival" },
        ],
      },
    ]);
  });
});
