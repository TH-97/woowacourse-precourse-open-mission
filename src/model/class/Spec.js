export class Spec {
  #spec;

  constructor(spec) {
    this.#validate(spec);
    this.#spec = spec;
  }

  #validate(spec) {
    if (spec.length === 0) throw new Error("[ERROR] 값이 비어있습니다");
  }

  createSpecMap() {
    const specMap = new Map(this.#spec.map((spec) => [spec.name, spec.id]));
    return specMap;
  }
}
