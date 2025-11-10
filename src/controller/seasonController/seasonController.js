import { CurrentSeason } from "../../model/season/CurrentSeason.js";
import { loadCurrentSeason } from "./handler/loadCurrentSeason.js";

export const seasonController = {
  loadCurrentSeasonEncounterMap() {
    const currentSeasonId = 45;
    const currentSeasonInfo = loadCurrentSeason(currentSeasonId);

    const encounterMap = new CurrentSeason(
      currentSeasonInfo
    ).creatEncounterMap();

    return encounterMap;
  },
};
