import { GearDAO } from "../dao/GearDAO.js";
import { Gear } from "../model/Gear.model.js";
import { db } from "../db/db.js";

export const gearService = {
  async saveRecommendItem(getGearListDTOs) {
    const dao = new GearDAO(db);
    const gear = new Gear(getGearListDTOs);

    const recommendItems = this.calculateRecommendItems(gear);

    dao.insert(recommendItems);
  },
  calculateRecommendItems(gear) {
    const recommendItems = {
      head: this.findRecommendItem(gear.getHeads()),
      back: this.findRecommendItem(gear.getBacks()),
      chest: this.findRecommendItem(gear.getChests()),
      feet: this.findRecommendItem(gear.getFeets()),
      fingers: this.findRecommendSpecialSlot(gear.getFingers()),
      hands: this.findRecommendItem(gear.getHands()),
      legs: this.findRecommendItem(gear.getLegs()),
      mainHand: this.findRecommendSpecialSlot(gear.getMainHand()),
      neck: this.findRecommendItem(gear.getNecks()),
      shoulder: this.findRecommendItem(gear.getShoulders()),
      trinkets: this.findRecommendSpecialSlot(gear.getTrinkets()),
      waist: this.findRecommendItem(gear.getWaists()),
      wrist: this.findRecommendItem(gear.getWrists()),
    };

    return recommendItems;
  },

  findRecommendItem(items) {
    const countMap = new Map();

    for (const item of items) {
      countMap.set(item, (countMap.get(item) || 0) + 1);
    }

    const [item] = this.sortItem(countMap)[0];
    return item;
  },

  sortItem(countMap) {
    return Array.from(countMap.entries()).sort((a, b) => b[1] - a[1]);
  },

  findRecommendSpecialSlot(items) {
    const countMap = new Map();

    for (const item of items) {
      countMap.set(item, (countMap.get(item) || 0) + 1);
    }

    const sorted = this.sortItem(countMap);

    let [item1] = sorted[0];
    let [item2] = sorted[1];

    if (this.isSameItem(item1, item2)) {
      [item2] = sorted[2] ?? [null];
    }

    return [item1, item2];
  },
  isSameItem(item1, item2) {
    if (!item1 || !item2) return false;

    const itam1Name = item1.name.split(" ")[0];
    const itam2Name = item2.name.split(" ")[0];
    return itam1Name === itam2Name;
  },
};
