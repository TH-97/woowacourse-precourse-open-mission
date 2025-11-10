export class CurrentSeason {
  #seasonData;

  constructor(seasonData) {
    this.#validate(seasonData);
    this.#seasonData = seasonData;
  }
  #validate(seasonData) {
    if (!seasonData) throw new Error("[ERROR] 값이 비어있습니다");
    if (seasonData.id !== 45) throw new Error("[ERROR] 현재 시즌이 아닙니다.");
  }

  creatEncounterMap() {
    const encounterMap = new Map(
      this.#seasonData.encounters.map((zone) => [zone.id, zone.name])
    );
    return encounterMap;
  }
}
