import { Input } from "../../model/input/input.js";
import { inputView } from "../../view/inputView/inputView.js";

export const inputController = {
  async inputValue() {
    const input = inputView.inputValue();
    return input;
  },
  getClassId(input, classNameToIdMap) {
    const inputValue = new Input(input);
    const classId = inputValue.getClassId(input, classNameToIdMap);
    return classId;
  },
  getSpecId(inputSpecName, classSpecNameToIdMap, classId) {
    const inputValue = new Input(inputSpecName);
    const specId = inputValue.getSpecId(
      inputSpecName,
      classSpecNameToIdMap,
      classId
    );
    return specId;
  },
};
