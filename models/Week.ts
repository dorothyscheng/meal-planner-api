import { Document, Model, model, Schema } from 'mongoose';
import { Recipe } from './Recipe';

export interface IWeek extends Document {
    name: string,
    mondayB: Recipe,
    mondayL: Recipe,
    mondayD: Recipe,
    tuesdayB: Recipe,
    tuesdayL: Recipe,
    tuesdayD: Recipe,
    wednesdayB: Recipe,
    wednesdayL: Recipe,
    wednesdayD: Recipe,
    thursdayB: Recipe,
    thursdayL: Recipe,
    thursdayD: Recipe,
    fridayB: Recipe,
    fridayL: Recipe,
    fridayD: Recipe,
    saturdayB: Recipe,
    saturdayL: Recipe,
    saturdayD: Recipe,
    sundayB: Recipe,
    sundayL: Recipe,
    sundayD: Recipe,
}

const weekSchema: Schema = new Schema({
    name: {type: String, required: true},
    mondayB: {
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
      },
    mondayL: {
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
    },
    mondayD: {
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
    },
    tuesdayB: {
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
    },
    tuesdayL: {
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
    },
    tuesdayD: {
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
    },
    wednesdayB: {
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
    },
    wednesdayL: {
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
    },
    wednesdayD: {
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
    },
    thursdayB: {
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
    },
    thursdayL: {
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
    },
    thursdayD: {
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
    },
    fridayB: {
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
    },
    fridayL: {
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
    },
    fridayD: {
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
    },
    saturdayB: {
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
    },
    saturdayL: {
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
    },
    saturdayD: {
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
    },
    sundayB: {
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
    },
    sundayL: {
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
    },
    sundayD: {
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
    },
}, { timestamps: true });

const Week: Model<IWeek> = model('Week', weekSchema)

export default Week;