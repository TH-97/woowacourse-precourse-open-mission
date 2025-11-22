export class GearListDTO {
  #gearList;
  constructor(data) {
    this.#gearList = data.map((gear) => new GearDTO(gear));
  }

  getGearList() {
    return this.#gearList;
  }
}
