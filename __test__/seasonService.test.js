import { seasonService } from "../src/service/seasonService.js";

jest.mock("../src/dto/currentSeasonDto.js", () => ({
  CurrentSeasonDto: jest.fn().mockImplementation(() => ({
    getEncounters: jest.fn(() => [{ id: 1, name: "Dungeon A" }]),
  })),
}));

jest.mock("../src/model/Encounters.js", () => ({
  Encounters: jest.fn().mockImplementation(() => ({
    getTransformEncounters: jest.fn(() => [
      { dungeonId: 1, dungeonName: "Dungeon A" },
    ]),
  })),
}));

jest.mock("../src/dao/EncounterDAO.js", () => ({
  EncounterDAO: jest.fn().mockImplementation(() => ({
    insert: jest.fn(),
  })),
}));

jest.mock("../src/db/db.js", () => ({
  db: {},
}));

test("현재 시즌 데이터 찾고 DTO 호출", async () => {
  const input = [
    { id: 10, name: "other" },
    { id: 45, name: "current", encounters: [] },
  ];

  const result = await seasonService.findCurrentSeasonData(input);

  expect(result).toEqual([{ id: 1, name: "Dungeon A" }]);
});

test("db에 저장 테스트", async () => {
  const mockInput = [{ id: 1, name: "Dungeon A" }];

  await seasonService.saveCurrentSeasonEncounters(mockInput);

  const { EncounterDAO } = require("../src/dao/EncounterDAO.js");

  const daoInstance = EncounterDAO.mock.results[0].value;

  expect(daoInstance.insert).toHaveBeenCalledTimes(1);
  expect(daoInstance.insert).toHaveBeenCalledWith([
    { dungeonId: 1, dungeonName: "Dungeon A" },
  ]);
});
