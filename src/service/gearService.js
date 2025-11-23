import { GearDAO } from "../dao/GearDAO.js";
import { Gear } from "../model/gear.model.js";
import { db } from "../db/db.js";

export const gearService = {
  async saveRecommendItem(getGearListDTOs) {
    const dao = new GearDAO(db);
    const gear = new Gear(getGearListDTOs);

    const recommendItems = this.calculateRecommendItems(gear);

    await dao.insert(recommendItems);
  },

  calculateRecommendItems(gear) {
    return {
      head: this.findRecommendItem(gear.getHeads()),
      back: this.findRecommendItem(gear.getBacks()),
      chest: this.findRecommendItem(gear.getChests()),
      feet: this.findRecommendItem(gear.getFeet()),
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
  },

  buildCountMap(items) {
    const countMap = new Map();
    for (const item of items) {
      const key = `${item.name}:${item.icon}`;
      countMap.set(key, (countMap.get(key) || 0) + 1);
    }
    return Array.from(countMap.entries()).sort((a, b) => b[1] - a[1]);
  },

  findRecommendItem(items) {
    const sorted = this.buildCountMap(items);

    const [key] = sorted[0];
    const [name, icon] = key.split(":");
    return { name, icon };
  },

  findRecommendSpecialSlot(items) {
    const sorted = this.buildCountMap(items);

    console.log(sorted);
    const [key1] = sorted[0];
    const [key2] = sorted[1] || [null];

    const [name1, icon1] = key1.split(":");
    const item1 = { name: name1, icon: icon1 };

    const [name2, icon2] = key2.split(":");
    let item2 = { name: name2, icon: icon2 };

    return [item1, item2];
  },
};
