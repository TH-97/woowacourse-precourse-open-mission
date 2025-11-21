export class CurrentSeasonDto {
  #encounters;
  constructor(data) {
    this.#encounters = data.encounters;
  }

  getEncounters() {
    return this.#encounters;
  }
}
