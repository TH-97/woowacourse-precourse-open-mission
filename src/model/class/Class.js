import { Spec } from "./Spec.js";

export class Class {
  #classes;

  constructor(data) {
    this.#validate(data);
    this.#classes = data;
  }

  #validate(data) {
    if (data.length === 0) throw new Error("[ERROR] 값이 비어있습니다");
  }

  createClassNameToIdMap() {
    const classMap = new Map(
      this.#classes.map((classInfo) => [classInfo.name, classInfo.id])
    );

    return classMap;
  }

  createSpecNameToIdMap() {
    const classSpecMap = new Map(
      this.#classes.map((classInfo) => [
        classInfo.id,
        new Spec(classInfo.specs).creatSpecMap(),
      ])
    );
    return classSpecMap;
  }
}
