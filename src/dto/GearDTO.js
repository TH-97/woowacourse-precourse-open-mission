import { ERROR } from "../constants/index.js";

export class GearDTO {
  #gearName;
  #gearIcon;
  constructor({ name, icon }) {
    this.#validate(name);
    this.#gearName = name;
    this.#gearIcon = icon;
  }
  #validate(name) {
    if (!name) throw new Error(ERROR.EMPTY);
  }

  getGearName() {
    return this.#gearName;
  }
  getGearIcon() {
    return this.#gearIcon;
  }
}
