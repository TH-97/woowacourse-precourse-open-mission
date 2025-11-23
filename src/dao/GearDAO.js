export class GearDAO {
  #collection;

  constructor(db) {
    this.#collection = db.getCollection("recommendItem");
    if (!this.#collection) {
      this.#collection = db.addCollection("recommendItem");
    }
  }

  insert(item) {
    return this.#collection.insert(item);
  }
}
