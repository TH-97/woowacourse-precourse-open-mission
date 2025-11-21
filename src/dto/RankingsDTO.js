import { ERROR } from "../constants/index.js";

export class RankingsDTO {
  #gear;

  constructor(data) {
    this.#validate(data);
    this.#gear = data.gear;
  }
  #validate(data) {
    if (data.length === 0) throw new Error(ERROR.EMPTY);
  }

  getGear() {
    return this.#gear;
  }
}
