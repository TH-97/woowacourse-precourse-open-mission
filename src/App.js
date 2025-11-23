import { classController } from "./controller/classController.js";
import { gearController } from "./controller/gearController.js";
import { rankingsController } from "./controller/rankingsController.js";
import { seasonController } from "./controller/seasonController.js";

class App {
  async init() {
    await seasonController.syncSeasonData();
    await classController.syncClassAndSpecData();
  }

  async runGearUpdate(dungeonId, classId, specId) {
    const gearListDTOs = await rankingsController.getGearDTOs(
      dungeonId,
      classId,
      specId
    );
    gearController.syncRecommendItem(gearListDTOs);
  }
  async run() {
    await seasonController.syncSeasonData();
    await classController.syncClassAndSpecData();
    const gearListDTOs = await rankingsController.getGearDTOs(62660, 1, 1);
    gearController.syncRecommendItem(gearListDTOs);
  }
}

export default new App();
