import { classService } from "../service/classService.js";

export const classController = {
  async syncClassAndSpecData() {
    let data = {};
    try {
      data = await classService.loadClassData();
    } catch (e) {
      data = await classService.loadMockClassData();
    }

    await classService.saveClassName(data);
    await classService.saveSpecsByName(data);
  },
};
