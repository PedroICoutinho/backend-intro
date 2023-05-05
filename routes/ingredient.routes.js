import express from "express";
import { IngredientModel } from "../models/ingredient.model.js";

const ingredientRouter = express.Router();

ingredientRouter.post("/", async (req, res) => {
  try {
    const createdIngredient = await IngredientModel.create(req.body);

    return res.status(201).json(createdIngredient);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
});

ingredientRouter.get("/", async (req, res) => {
  try {
    const allIngredients = await IngredientModel.find();

    return res.status(200).json(allIngredients);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
});

ingredientRouter.get("/:id", async (req, res) => {
  try {
    const ingredient = await IngredientModel.findOne({ _id: req.params.id });

    return res.status(200).json(ingredient);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
});

ingredientRouter.delete("/:id", async (req, res) => {
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

ingredientRouter.put("/:id", async (req, res) => {
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

export { ingredientRouter };
