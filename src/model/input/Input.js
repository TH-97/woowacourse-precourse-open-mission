export class Input {
  #input;

  constructor(input) {
    this.#validate(input);
    this.#input = input;
  }
  #validate(input) {
    if (!input) throw new Error("[ERROR] 값이 비어있습니다");
  }

  #validateClassName(input, classNameToIdMap) {
    const classNameArray = [...classNameToIdMap.keys()];
    if (!classNameArray.some((className) => className === input))
      throw new Error("[ERROR] 정확히 직업 이름을 기입해주십시오");
  }
  #validateSpecName(inputSpecName, classSpecNameToIdMap, classId) {
    const specNameArray = [...classSpecNameToIdMap.get(classId).keys()];
    if (!specNameArray.some((specName) => specName === inputSpecName))
      throw new Error("[ERROR] 정확히 영웅특성 이름을 기업해 주십시오");
  }

  getClassId(input, classNameToIdMap) {
    this.#validateClassName(input, classNameToIdMap);
    const classId = classNameToIdMap.get(input);
    return classId;
  }
  getSpecId(inputSpecName, classSpecNameToIdMap, classId) {
    this.#validateSpecName(inputSpecName, classSpecNameToIdMap, classId);
    const specId = classSpecNameToIdMap.get(classId).get(inputSpecName);
    return specId;
  }
}
