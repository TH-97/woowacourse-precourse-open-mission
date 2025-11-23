import { ERROR } from "../constants/index.js";

export class Encounters {
  #encounters;

  constructor(encounters) {
    this.#validate(encounters);
    this.#encounters = encounters;
  }

  #validate(data) {
    if (data.length === 0) throw new Error(ERROR.EMPTY);
  }

  getTransformEncounters() {
    const encounters = this.#encounters.map((info) => ({
      dungeonId: info.id,
      dungeonName: info.name,
    }));
    return encounters;
  }
}
