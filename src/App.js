import { classController } from "./controller/classController/classController.js";
import { outputController } from "./controller/outputController/outputController.js";
import { seasonController } from "./controller/seasonController/seasonController.js";
import { inputController } from "./controller/inputController/inputController.js";
import { dataController } from "./controller/dataController/dataController.js";

class App {
  async run() {
    const encounterMap = seasonController.loadCurrentSeasonEncounterMap();
    const classNameToIdMap = classController.loadClassNameToIdMap();
    const classSpecNameToIdMap = classController.loadClassSpecNameToIdMap();
    outputController.showClassName(classNameToIdMap);
    const inputClassName = await inputController.inputValue();
    const classId = inputController.getClassId(
      inputClassName,
      classNameToIdMap
    );
    outputController.showSpecName(classId, classSpecNameToIdMap);
    const inputSpecName = await inputController.inputValue();
    const specId = inputController.getSpecId(
      inputSpecName,
      classSpecNameToIdMap,
      classId
    );

    const recommendItemArray = dataController.loadRecommendItem();
    outputController.showRecommendItem(recommendItemArray);
  }
}

export default App;
