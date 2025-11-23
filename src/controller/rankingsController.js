import { rankingsService } from "../service/rankingsService.js";

export const rankingsController = {
  async getGearDTOs(encounterId, classId, specId) {
    let data = {};
    try {
      data = await rankingsService.loadRankingsData(
        encounterId,
        classId,
        specId
      );
    } catch (e) {
      data = await rankingsService.loadMockRankingsData(classId, specId);
    }

    const getGearDTOs = rankingsService.getGear(data);

    return getGearDTOs;
  },
};
