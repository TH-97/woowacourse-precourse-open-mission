export class ClassDAO {
  #collection;

  constructor(db) {
    this.#collection = db.getCollection("classNames");
    if (!this.#collection) {
      this.#collection = db.addCollection("classNames");
    }
  }

  insertClassNames(classNames) {
    return this.#collection.insert(classNames);
  }
}
