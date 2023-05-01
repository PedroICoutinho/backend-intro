import express from "express";

const app = express();

app.use(express.json());

const data = [];

app.get("/", (req, res) => {
  return res.status(200).json("Oi!");
});

app.post("/create", (req, res) => {
  data.push(req.body);

  return res.status(201).json(data[data.length - 1]);
});

app.listen(4000, () => {
  console.log("Conectado a porta 4000");
});
