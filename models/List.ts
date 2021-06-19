import { Document, Model, model, Schema } from 'mongoose';
import { Recipe } from './Recipe';

export interface IList extends Document {
    name: string,
    recipes: Recipe[],
}

const listSchema: Schema = new Schema({
  name: {type: String, required: true},
  recipes: [
    {
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
    }
  ],
});

const List: Model<IList> = model('List', listSchema)

export default List;