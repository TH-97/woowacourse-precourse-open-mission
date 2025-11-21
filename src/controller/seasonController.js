import { seasonService } from "../service/seasonService.js";

export const seasonController = {
  async syncSeasonData() {
    let data = {};
    try {
      data = await seasonService.loadCurrentSeasonData();
    } catch (e) {
      data = await seasonService.loadMockCurrentSeason();
    }
    const encounters = await seasonService.findCurrentSeasonData(data);
    await seasonService.saveCurrentSeasonEncounters(encounters);
  },
};
