import { Gear } from "../src/model/Gear.model.js";
import { GearListDTO } from "../src/dto/GearListDTO.js";
import mockData from "../__mock__/class1_spec1_page1.mock.json";

describe("gear 클래스 테스트", () => {
  test("getHeads() 는 각 gearList 의 0번째 gear 의 name 을 반환해야 한다", () => {
    const __mock__Data = {
      rankings: [
        {
          gear: [
            { name: "Mock Helm" },
            { name: "Mock Chest" },
            { name: "Mock Leggings" },
          ],
        },
        {
          gear: [
            { name: "Another Helm" },
            { name: "Another Chest" },
            { name: "Another Leggings" },
          ],
        },
        {
          gear: [
            { name: "Third Helm" },
            { name: "Third Chest" },
            { name: "Third Leggings" },
          ],
        },
      ],
    };
    const data = __mock__Data;

    const gearListDTOs = data.rankings.map(
      (info) => new GearListDTO(info.gear)
    );
    const gear = new Gear(gearListDTOs);

    const result = gear.getHeads();

    expect(result).toEqual(["Mock Helm", "Another Helm", "Third Helm"]);
  });
});
