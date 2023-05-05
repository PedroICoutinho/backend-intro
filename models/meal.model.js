import { Schema, Types, model } from "mongoose";

const mealSchema = new Schema({
  name: { type: String, required: true },
  cal: { type: Number, default: 222 },
  ingredients: [{ type: Types.ObjectId, ref: "Ingredient" }],
});

export const MealModel = model("Meal", mealSchema);
