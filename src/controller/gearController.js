import { gearService } from "../service/gearService.js";

export const gearController = {
  async syncRecommendItem(gearListDTOs) {
    gearService.saveRecommendItem(gearListDTOs);
  },
};
