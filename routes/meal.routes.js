import express from "express";
import { IngredientModel } from "../models/ingredient.model.js";
import { MealModel } from "../models/meal.model.js";

const mealRouter = express.Router();

mealRouter.post("/", async (req, res) => {
  try {
    const meal = await MealModel.create(req.body);

    meal.ingredients.forEach(async (currentIngredient) => {
      await IngredientModel.findOneAndUpdate(
        { _id: currentIngredient },
        { $push: { meals: meal._id } },
        { runValidators: true }
      );
    });

    return res.status(201).json(meal);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
});

mealRouter.get("/:id", async (req, res) => {
  try {
    const meal = await MealModel.findOne({ _id: req.params.id }).populate(
      "ingredients"
    );

    return res.status(200).json(meal);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
});

export { mealRouter };
