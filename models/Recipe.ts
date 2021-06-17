import { Document, Model, model, Schema } from 'mongoose';

export interface IRecipe extends Document {
    url: string,
    image: string,
    source: string,
    label: string,
    yield: number,
    dietLabels: string[],
    healthLabels: string[],
    ingredientLines: string[],
    totalTime: number,
    cuisineType: string[],
    mealType: string[],
    apiLink: string,
}

const recipeSchema: Schema = new Schema({
    url: String,
    image: String,
    source: String,
    label: String,
    yield: Number,
    dietLabels: [String],
    healthLabels: [String],
    ingredientLines: [String],
    totalTime: Number,
    cuisineType: [String],
    mealType: [String],
    apiLink: String,
});

const Recipe: Model<IRecipe> = model('Recipe', recipeSchema)

export default Recipe;