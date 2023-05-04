import { Schema, model } from "mongoose";

const ingredientSchema = new Schema({
  name: { type: String, required: true, maxLength: 64, minLength: 3 },
  type: {
    type: String,
    required: true,
    enum: ["Tempero", "Proteina", "Outros"],
    default: "Outros",
  },
  img: {
    type: String,
    default:
      "https://static.vecteezy.com/ti/vetor-gratis/p1/5845871-cafe-da-manha-comida-no-prato-com-ovo-e-salsicha-cartoon-icone-ilustracao-cafe-da-manha-icone-conceito-isolado-premium-plano-cartoon-estilo-vetor.jpg",
  },
});

export const IngredientModel = model("Ingredient", ingredientSchema);
