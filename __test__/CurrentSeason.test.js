import { CurrentSeason } from "../src/model/season/CurrentSeason.js";
import __mock__apiSeasonData from "../__mock__/season.mock.json";

describe("CurrentSeason 클래스 테스트", () => {
  test("EncounterMap을 정확히 반환해야 한다", () => {
    // given
    const testData = __mock__apiSeasonData.find((season) => season.id === 45);
    const correctResult = new Map([
      [62660, "Ara-Kara, City of Echoes"],
      [12830, "Eco-Dome Al'dani"],
      [62287, "Halls of Atonement"],
      [62773, "Operation: Floodgate"],
      [62649, "Priory of the Sacred Flame"],
      [112442, "Tazavesh: So'leah's Gambit"],
      [112441, "Tazavesh: Streets of Wonder"],
      [62662, "The Dawnbreaker"],
    ]);

    // when
    const currentSeason = new CurrentSeason(testData);
    const result = currentSeason.creatEncounterMap();

    // then
    expect(result).toEqual(correctResult);
  });
  test("현재 시즌이 아닐시 예외 발생", () => {
    const testData = __mock__apiSeasonData.find((season) => season.id === 44);

    expect(() => {
      new CurrentSeason(testData);
    }).toThrow("[ERROR]");
  });
  test("시즌 id가 잘못 되어 값이 비었을 때 예외 발생", () => {
    const testData = __mock__apiSeasonData.find((season) => season.id === 0);

    expect(() => {
      new CurrentSeason(testData);
    }).toThrow("[ERROR]");
  });
});
