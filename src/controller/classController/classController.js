import { Class } from "../../model/class/class.js";
import { loadClassesAndSpecs } from "./handler/loadClassesAndSpecs.js";

export const classController = {
  createClassInfo() {
    const classesData = loadClassesAndSpecs();
    return new Class(classesData);
  },

  loadClassNameToIdMap() {
    const classNameToIdMap = this.createClassInfo().createClassNameToIdMap();
    return classNameToIdMap;
  },

  loadClassSpecNameToIdMap() {
    const sepcNameToIdMap = this.createClassInfo().createSpecNameToIdMap();
    return sepcNameToIdMap;
  },
};
