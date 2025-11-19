import { Data } from "../../model/data/Data.js";
import { loadData } from "./handler/loadData.js";

export const dataController = {
  loadRecommendItem(classId, specId) {
    const loadData = loadData(classId, specId);
    const data = new Data(loadData);
    const recommendItem = data.getRecommendItem();

    return recommendItem;
  },
};
