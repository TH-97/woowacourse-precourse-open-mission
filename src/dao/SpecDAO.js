export class SpecDAO {
  #collection;

  constructor(db) {
    this.#collection = db.getCollection("specsByName");
    if (!this.#collection) {
      this.#collection = db.addCollection("specsByName");
    }
  }

  insert(specs) {
    return this.#collection.insert(specs);
  }
}
