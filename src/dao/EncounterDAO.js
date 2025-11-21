export class EncounterDAO {
  #collection;

  constructor(db) {
    this.#collection = db.getCollection("encounters");
    if (!this.#collection) {
      this.#collection = db.addCollection("encounters");
    }
  }

  insert(encounter) {
    return this.#collection.insert(encounter);
  }
}
