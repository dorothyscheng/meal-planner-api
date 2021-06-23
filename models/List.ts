import { Document, Model, model, Schema } from 'mongoose';
import { Recipe } from './Recipe';

export interface IList extends Document {
    username: string,
    name: string,
    recipes: Recipe[],
}

const listSchema: Schema = new Schema({
  username: {type: String, required: true},
  name: {type: String, required: true},
  recipes: [
    {
      recipe:  {
        uri: String,
        label: String,
        image: String,
        source: String,
        url: String,
        shareAs: String,
        yield: Number,
        dietLabels: [String],
        healthLabels: [String],
        cautions: [String],
        ingredientLines: [String],
        ingredients: [{
            text: String,
            weight: Number,
            foodCategory: String,
            foodId: String,
            image: String,
        }],
        calories: Number,
        totalWeight: Number,
        totalTime: Number,
        cuisineType: [String],
        mealType: [String],
        dishType: [String],
      },
      _links: {
          self: {
              href: String,
              title: String,
          },
      },
    }
  ],
});

const List: Model<IList> = model('List', listSchema)

export default List;