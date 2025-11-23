import { ERROR } from "../constants/index.js";

export class Gear {
  #gearListDTOs;

  constructor(gearListDTOs) {
    this.#validate(gearListDTOs);
    this.#gearListDTOs = gearListDTOs;
  }

  #validate(gearListDTOs) {
    if (gearListDTOs.length === 0) throw new Error(ERROR.EMPTY);
  }
  #getSlotWithIcon(slotIndex) {
    const gearListArray = this.#gearListDTOs.map((info) => info.getGearList());
    const gaerObject = gearListArray.map((gears) => ({
      name: gears[slotIndex].getGearName(),
      icon: gears[slotIndex].getGearIcon(),
    }));
    return gaerObject;
  }

  getHeads() {
    return this.#getSlotWithIcon(0);
  }

  getNecks() {
    return this.#getSlotWithIcon(1);
  }

  getShoulders() {
    return this.#getSlotWithIcon(2);
  }

  getChests() {
    return this.#getSlotWithIcon(4);
  }

  getWaists() {
    return this.#getSlotWithIcon(5);
  }

  getLegs() {
    return this.#getSlotWithIcon(6);
  }

  getFeet() {
    return this.#getSlotWithIcon(7);
  }

  getWrists() {
    return this.#getSlotWithIcon(8);
  }

  getHands() {
    return this.#getSlotWithIcon(9);
  }

  getFingers() {
    const finger1 = this.#getSlotWithIcon(10);
    const finger2 = this.#getSlotWithIcon(11);
    return finger1.concat(finger2);
  }

  getTrinkets() {
    const trinket1 = this.#getSlotWithIcon(12);
    const trinket2 = this.#getSlotWithIcon(13);
    return trinket1.concat(trinket2);
  }

  getBacks() {
    return this.#getSlotWithIcon(14);
  }

  getMainHand() {
    const mainHand1 = this.#getSlotWithIcon(15);
    const mainHand2 = this.#getSlotWithIcon(16);
    return mainHand1.concat(mainHand2);
  }
}
