import { API } from "../constants/index.js";
import __mock__apiData from "../../__mock__/classes_specs_data.mock.json" with {type : "json"};
import { db } from "../db/db.js";
import "dotenv/config";
import { ClassDTO } from "../dto/ClassDTO.js";
import { ClassDAO } from "../dao/ClassDAO.js";
import { SpecDAO } from "../dao/SpecDAO.js";
import { Class } from "../model/Class.model.js";

const API_KEY = process.env.WARCRAFTLOG_API_KEY;
const URL = API.WARCRAFTLOG_CLASS_URL;

export const classService = {
  async loadClassData() {
    if (!API_KEY) throw new Error(ERROR.API_KEY_NOT_SET);

    const url = `${URL}apikey=${API_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${ERROR.API_REQUEST_FAILED}: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (e) {
      throw new Error(ERROR.API_REQUEST_ERROR);
    }
  },
  async loadMockClassData() {
    const data = __mock__apiData;
    return data;
  },

  async saveClassName(data){
    const dao = new ClassDAO(db)
    const classDTOs = data.map(classInfo => new ClassDTO(classInfo))
    const classNamesObject = new Class(classDTOs).getTransformClassName()

    dao.insertClassNames(classNamesObject)
  },

  async saveSpecsByName(data){
    const dao = new SpecDAO(db)
    const classDTOs = data.map(classInfo => new ClassDTO(classInfo))
    const specsByNameObject = new Class(classDTOs).getTransformSpecsByName()

    dao.insert(specsByNameObject)
  }
};
