export class Data {
  #data;

  constructor(data) {
    this.#validate(data);
    this.#data = data;
  }

  #validate(data) {
    if (data.length === 0) throw new Error("[ERROR] 값이 비어있습니다");
  }

  #isFingerOrTrinket(gearOne, gearTwo) {
    const map = new Map();

    for (const [item, count] of [...gearOne, ...gearTwo]) {
      map.set(item, (map.get(item) || 0) + count);
    }

    const gear = [...map.entries()];
    let result = [gear[0], gear[1]];

    if (this.#isSameItem(gear[0], gear[1])) result = [gear[0], gear[2]];
    return result;
  }
  #isSameItem(item1, item2) {
    const itemName1 = item1[0].split(" ");
    const itemName2 = item2[0].split(" ");

    console.log(itemName1, itemName2);

    if (itemName1[0] === itemName2[0]) return true;
    return false;
  }
  getRecommendItem() {
    const gearCountArray = this.#getGears();
    const gears = this.#sortGear(gearCountArray);

    return this.#buildRecommend(gears);
  }

  #buildRecommend(gears) {
    const recommendItem = [];

    for (let i = 0; i < 18; i++) {
      if (this.#isSpecialSlot(i)) {
        const [gearOne, gearTwo] = this.#isFingerOrTrinket(
          gears[i],
          gears[i + 1]
        );
        recommendItem.push(gearOne, gearTwo);
        i++;
        continue;
      }
      recommendItem.push(gears[i][0]);
    }

    return recommendItem;
  }

  #isSpecialSlot(index) {
    return index === 10 || index === 12;
  }
  #sortGear(gearCountArray) {
    const sortedGears = [];

    for (const gearMap of gearCountArray) {
      const gearArray = [...gearMap.entries()];
      gearArray.sort((a, b) => b[1] - a[1]);

      sortedGears.push(gearArray);
    }
    return sortedGears;
  }

  #incrementGearCount(map, gearName) {
    if (map.has(gearName)) {
      map.set(gearName, map.get(gearName) + 1);
    } else {
      map.set(gearName, 1);
    }
  }

  #getGears() {
    const rankingArray = this.#data.rankings;
    const gearCountArray = Array.from({ length: 18 }, () => new Map());

    rankingArray.forEach((value) => {
      const gears = value.gear;

      for (let i = 0; i < 18; i++) {
        this.#incrementGearCount(gearCountArray[i], gears[i].name);
      }
    });

    return gearCountArray;
  }
}
