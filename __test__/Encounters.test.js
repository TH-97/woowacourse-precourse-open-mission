import { Encounters } from "../src/model/Encounters.model.js";
import { ERROR } from "../src/constants/index.js";

describe("Encounters 모델 테스트", () => {
  test("encounters 배열이 들어오면 인스턴스가 생성", () => {
    const input = [
      { id: 1, name: "Dungeon A" },
      { id: 2, name: "Dungeon B" },
    ];

    const encounters = new Encounters(input);

    expect(encounters).toBeInstanceOf(Encounters);
  });

  test("값이 비어 들어오면 예외 상황 발생", () => {
    expect(() => new Encounters([])).toThrow(ERROR.EMPTY);
  });

  test("id, name을 dungeonId, dungeonName으로 변환해서 반환 테스트", () => {
    const input = [
      { id: 101, name: "Ara-Kara" },
      { id: 202, name: "Halls of Atonement" },
    ];

    const encounters = new Encounters(input);
    const result = encounters.getTransformEncounters();

    expect(result).toEqual([
      { dungeonId: 101, dungeonName: "Ara-Kara" },
      { dungeonId: 202, dungeonName: "Halls of Atonement" },
    ]);
  });
});
