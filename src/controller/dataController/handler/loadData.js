export function loadData(classId, specId) {
  const data = import(
    `../__mock__/class${classId}_spec${specId}_page1.mock.json`,
    {
      with: { type: "json" },
    }
  );
  return data;
}
