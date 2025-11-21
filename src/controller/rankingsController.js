import { rankingsService } from "../service/rankingsService";

export const rankingsController = {
  async getGearDTOs() {
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
