import express from "express";
import { db } from "./db/db.js";
import App from "./App.js";
const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(express.json());

App.init()
  .then(() => console.log("서버 초기 데이터 동기화 완료"))
  .catch((err) => console.error("초기 동기화 에러:", err));

app.get("/api/classes", (req, res) => {
  const classes = db.getCollection("classNames").data;
  res.json(classes);
});

app.get("/api/encounters", (req, res) => {
  const encounters = db.getCollection("encounters").data;
  res.json(encounters);
});
app.get("/api/spec", (req, res) => {
  const specsByName = db.getCollection("specsByName").data;
  res.json(specsByName);
});
app.get("/api/getRecommedItem", async (req, res) => {
  const { dungeon: dungeonId, class: classId, spec: specId } = req.query;
  await App.runGearUpdate(dungeonId, classId, specId);
  const recommendItems = db.getCollection("recommendItem").data;
  res.json(recommendItems);
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
