import { API, ERROR } from "../constants/index.js";
import __mock__apiData from "../../__mock__/season.mock.json" with {type : "json"};
import { CurrentSeasonDto } from "../dto/CurrentSeasonDTO.js";
import { EncounterDAO } from "../dao/EncounterDAO.js";
import { Encounters } from "../model/Encounters.model.js";
import { db } from "../db/db.js";
import 'dotenv/config';

const API_KEY = process.env.WARCRAFTLOG_API_KEY;
const URL = API.WARCRAFTLOG_ZONE_URL;

export const seasonService = {
  async loadCurrentSeasonData() {
    if (!API_KEY) throw new Error(ERROR.API_KEY_NOT_SET);

    const url = `${URL}api_key=${API_KEY}`;

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

  async loadMockCurrentSeason() {
    const data = __mock__apiData;
    return data;
  },

  async findCurrentSeasonData(data) {
    const currentSeasonData = data.find(season => season.id === 45);
    const encounters = new CurrentSeasonDto(currentSeasonData).getEncounters()

    return encounters
  },

  async saveCurrentSeasonEncounters(encounters){
    const dao = new EncounterDAO(db)
    const dungeonInfo = new Encounters(encounters).getTransformEncounters()
    dao.insert(dungeonInfo)
  },
};
