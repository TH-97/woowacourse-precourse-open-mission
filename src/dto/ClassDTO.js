export class ClassDTO {
  #classId;
  #className;
  #specs;

  constructor(data) {
    this.#classId = data.id;
    this.#className = data.name;
    this.#specs = data.specs;
  }

  getClassId() {
    return this.#classId;
  }
  getClassName() {
    return this.#className;
  }
  getSpecs() {
    return this.#specs;
  }
}
