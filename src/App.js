import { seasonController } from "./controller/seasonController/seasonController.js";

class App {
  async run() {
    const encounterMap = seasonController.loadCurrentSeasonEncounterMap();
  }
}

export default App;
