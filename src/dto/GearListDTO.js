import { GearDTO } from "./GearDTO.js";

export class GearListDTO {
  #gearList;
  constructor(gear) {
    this.#gearList = gear.map(
      (info) => new GearDTO({ name: info.name, icon: info.icon })
    );
  }

  getGearList() {
    return this.#gearList;
  }
}
