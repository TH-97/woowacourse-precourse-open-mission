import __mock__ClassesData from "../__mock__/classes_specs_data.mock.json";
import { Class } from "../src/model/class/class.js";
import { Spec } from "../src/model/class/Spec.js";

describe("Class 클래스 테스트", () => {
  test("ClassNameMap을 정확히 반환해야 한다", () => {
    // given
    const testData = __mock__ClassesData;
    const correctResult = new Map([
      ["Death Knight", 1],
      ["Druid", 2],
      ["Hunter", 3],
    ]);

    // when
    const classInfo = new Class(testData);
    const result = classInfo.createClassNameToIdMap();

    // then
    expect(result).toEqual(correctResult);
  });
  test("값이 비었을 때 예외 발생", () => {
    const testData = [];

    expect(() => {
      new Class(testData);
    }).toThrow("[ERROR]");
  });
  test("spec값이 비었을 때 예외 발생", () => {
    const testData = [];

    expect(() => {
      new Spec(testData);
    }).toThrow("[ERROR]");
  });
});
