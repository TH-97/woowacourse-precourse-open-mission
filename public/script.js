async function loadDungeon() {
  const res = await fetch("/api/encounters");
  const dungeons = await res.json();

  const dungeonSelect = document.getElementById("dungeon-select");
  dungeons.forEach((dungeon) => {
    const option = document.createElement("option");
    option.value = dungeon.dungeonId;
    option.textContent = dungeon.dungeonName;
    dungeonSelect.appendChild(option);
  });
}

async function loadClassNames() {
  const res = await fetch("/api/classes");
  const classes = await res.json();

  const classSelect = document.getElementById("class-select");
  classes.forEach((classInfo) => {
    const option = document.createElement("option");
    option.value = classInfo.classId;
    option.textContent = classInfo.className;
    classSelect.appendChild(option);
  });
}
async function loadSpecsForClass(value) {
  const res = await fetch("/api/spec");
  const specsByName = await res.json();
  const findClass = specsByName.find((classInfo) => classInfo.classId == value);
  const spec = findClass.classSpec;

  const specSelect = document.getElementById("spec-select");

  specSelect.innerHTML = '<option value="">전문화를 선택하세요</option>';

  spec.forEach((specInfo) => {
    const option = document.createElement("option");
    option.value = specInfo.id;
    option.textContent = specInfo.name;
    specSelect.appendChild(option);
  });
}
async function fetchItems(dungeonId, classId, spec) {
  const res = await fetch(
    `/api/getRecommedItem?dungeon=${dungeonId}&class=${classId}&spec=${spec}`
  );
  const recommedItems = await res.json();
  renderItems(recommedItems);
}

async function loadHtml() {
  const res = await fetch("/layout.html");
  templateHtml = await res.text();

  return templateHtml;
}
async function renderItems(items) {
  const resultsContainer = document.getElementById("results");

  const templateHtml = await loadHtml();
  resultsContainer.innerHTML = ``;

  const div = document.createElement("div");
  div.innerHTML = templateHtml;
  resultsContainer.appendChild(div);
  const item = items[0];

  const singleSlots = [
    "head",
    "hands",
    "neck",
    "waist",
    "shoulder",
    "legs",
    "feet",
    "chest",
    "wrist",
    "back",
  ];
  const arraySlots = ["fingers", "mainHand", "trinkets"];
  renderSingleSlots(div, item, singleSlots);
  renderArraySlots(div, item, arraySlots);

  resultsContainer.style.display = "block";
}

function renderSingleSlots(div, item, slots) {
  slots.forEach((slot) => {
    div.querySelector(`#${slot} .item-name`).textContent = item[slot].name;
    div.querySelector(
      `#${slot} .item-icon`
    ).src = `https://wow.zamimg.com/images/wow/icons/large/${item[slot].icon}`;
  });
}

function renderArraySlots(div, item, slots) {
  slots.forEach((slot) => {
    item[slot].forEach((gear, index) => {
      div.querySelector(`#${slot}-${index} .item-name`).textContent = gear.name;
      div.querySelector(
        `#${slot}-${index} .item-icon`
      ).src = `https://wow.zamimg.com/images/wow/icons/large/${gear.icon}`;
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadDungeon();
  loadClassNames();

  const classSelect = document.getElementById("class-select");
  classSelect.addEventListener("change", (e) => {
    loadSpecsForClass(e.target.value);
  });

  const form = document.getElementById("recommendForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const dungeonId = document.getElementById("dungeon-select").value;
    const classId = document.getElementById("class-select").value;
    const spec = document.getElementById("spec-select").value;
    fetchItems(dungeonId, classId, spec);
  });
});
