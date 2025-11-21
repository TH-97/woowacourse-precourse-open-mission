import { ERROR } from "../constants/index.js";

export class Class {
  #classDTOs;

  constructor(classDTOs) {
    this.#validate(classDTOs);
    this.#classDTOs = classDTOs;
  }

  #validate(classDTOs) {
    if (classDTOs.length === 0) throw new Error(ERROR.EMPTY);
  }

  getTransformClassName() {
    const classNameObjects = this.#classDTOs.map((dto) => ({
      className: dto.getClassName(),
    }));

    return classNameObjects;
  }

  getTransformSpecsByName() {
    const specsByNameObjects = this.#classDTOs.map((dto) => ({
      className: dto.getClassName(),
      classSpec: dto.getSpecs(),
    }));

    return specsByNameObjects;
  }
}
