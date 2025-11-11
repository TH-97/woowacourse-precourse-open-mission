import { classController } from "./controller/classController/classController.js";
import { seasonController } from "./controller/seasonController/seasonController.js";

class App {
  async run() {
    const encounterMap = seasonController.loadCurrentSeasonEncounterMap();
    const classNameToIdMap = classController.loadClassNameToIdMap();
    const classSpecNameToIdMap = classController.loadClassSpecNameToIdMap();
  }
}

export default App;
