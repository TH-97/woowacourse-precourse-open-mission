import { CurrentSeason } from "../src/model/CurrentSeason.model.js";
import { ERROR } from "../src/constants/index.js";

describe("CurrentSeason 모델 테스트", () => {
  const testSeasonData = {
    id: 45,
    name: "Mythic+ Season 3",
    encounters: [
      { id: 62660, name: "Ara-Kara, City of Echoes" },
      { id: 12830, name: "Eco-Dome Al'dani" },
    ],
  };

  test("값이 비어있으면 에러 발생", () => {
    expect(() => new CurrentSeason(null)).toThrow(ERROR.EMPTY);
  });

  test("시즌 id가 45가 아니면 에러 발생", () => {
    const invalidData = { ...testSeasonData, id: 44 };
    expect(() => new CurrentSeason(invalidData)).toThrow(
      ERROR.IS_NOT_CURRENT_SEASON
    );
  });

  test("던전 데이터를 dungeonId와 dungeonName 형태로 반환해야 한다", () => {
    const season = new CurrentSeason(testSeasonData);

    const result = season.getCurrentSeasonDungeons();

    expect(result).toEqual([
      { dungeonId: 62660, dungeonName: "Ara-Kara, City of Echoes" },
      { dungeonId: 12830, dungeonName: "Eco-Dome Al'dani" },
    ]);
  });
});
