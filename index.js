import express from "express";
import { connectToDB } from "./config/db.config.js";
import { ingredientRouter } from "./routes/ingredient.routes.js";
import { mealRouter } from "./routes/meal.routes.js";

connectToDB();

const app = express();

app.use(express.json());

app.use("/ingredient", ingredientRouter);
app.use("/meal", mealRouter);

app.listen(4000, () => {
  console.log("Conectado a porta 4000.");
});
