import __mock__apiData from "../../../../__mock__/season.mock.json" with {type : "json"};

export function loadCurrentSeason(targetSeason) {
  const findCurrentSeason = __mock__apiData.find((season) => season.id === targetSeason);
  return findCurrentSeason;
}
