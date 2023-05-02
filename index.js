import express from "express";

const app = express();

app.use(express.json());

const data = [];

// CREATE

app.post("/create", (req, res) => {
  data.push(req.body);

  console.log(data);

  return res.status(201).json(data[data.length - 1]);
});

// READ ALL

app.get("/all", (req, res) => {
  return res.status(200).json(data);
});

app.listen(4000, () => {
  console.log("Conectado a porta 4000.");
});
