import { API } from "../constants/index.js";
import { db } from "../db/db.js";
import "dotenv/config";
import fs from "fs/promises";
import { GearListDTO } from "../dto/GearListDTO.js";

const API_KEY = process.env.WARCRAFTLOG_API_KEY;
const URL = API.WARCRAFTLOG_RANKINGS_URL;

export const rankingsService = {
  async loadRankingsData(encounterId, classId, specId) {
    if (!API_KEY) throw new Error(ERROR.API_KEY_NOT_SET);

    const url = `${URL}${encounterId}?class=${classId}&spec=${specId}&includeCombatantInfo=true&api_key=${API_KEY}`;

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
  async loadMockRankingsData(classId, specId) {
    const data = await fs.readFile(
      `../../__mock__/class${classId}_spec${specId}_page1.mock.json`
    );
    return data;
  },
  async getGear(data) {
    const gearListDTOs = data.map((ranking) => new GearListDTO(ranking));

    return gearListDTOs;
  },
};
