import { ERROR } from "../constants/index.js";

export class CurrentSeason {
  #seasonData;

  constructor(seasonData) {
    this.#validate(seasonData);
    this.#seasonData = seasonData;
  }
  #validate(seasonData) {
    if (!seasonData) throw new Error(ERROR.EMPTY);
    if (seasonData.id !== 45) throw new Error(ERROR.IS_NOT_CURRENT_SEASON);
  }

  getCurrentSeasonDungeons() {
    const formatted = this.#seasonData.encounters.map((zone) => ({
      dungeonId: zone.id,
      dungeonName: zone.name,
    }));

    return formatted;
  }
}
