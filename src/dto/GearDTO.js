import { ERROR } from "../constants/index.js";

export class GearDTO {
  #gearName;
  #gearIcon;
  constructor(data) {
    this.#validate(data);
    this.#gearName = data.name;
    this.#gearIcon = data.icon;
  }
  #validate(data) {
    if (data.length === 0) throw new Error(ERROR.EMPTY);
  }

  getGearName() {
    return this.#gearName;
  }
  getGearIcon() {
    return this.#gearIcon;
  }
}
