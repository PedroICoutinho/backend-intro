import express from "express";
import { connectToDB } from "./config/db.config.js";
import { IngredientModel } from "./models/ingredient.model.js";

connectToDB();

const app = express();

app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const createdIngredient = await IngredientModel.create(req.body);

    return res.status(201).json(createdIngredient);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
});

app.get("/", async (req, res) => {
  try {
    const allIngredients = await IngredientModel.find();

    return res.status(200).json(allIngredients);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
});

app.get("/ingredient/:id", async (req, res) => {
  try {
    const ingredient = await IngredientModel.findOne({ _id: req.params.id });

    return res.status(200).json(ingredient);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const deletedIngredient = await IngredientModel.deleteOne({
      _id: req.params.id,
    });

    return res.status(200).json(deletedIngredient);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
});

app.put("/:id", async (req, res) => {
  try {
    const updatedItem = await IngredientModel.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true, runValidators: true }
    );

    return res.status(200).json(updatedItem);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
});

app.listen(4000, () => {
  console.log("Conectado a porta 4000.");
});
