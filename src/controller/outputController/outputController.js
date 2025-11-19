import { outputView } from "../../view/outputView/outputView.js";

export const outputController = {
  showClassName(classNameToIdMap) {
    outputView.fristGuideMessege(classNameToIdMap);
  },
  showSpecName(classId, classSpecNameToIdMap) {
    const spec = classSpecNameToIdMap.get(classId);

    outputView.secondGuideMessege(spec);
  },
  showRecommendItem(recommendItemArray) {
    outputView;
  },
};
