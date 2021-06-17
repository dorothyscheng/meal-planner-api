import { Document, Model, model, Schema } from 'mongoose';

export interface IList extends Document {
    name: string,
    recipes: Schema.Types.ObjectId[],
}

const listSchema: Schema = new Schema({
  name: {type: String, required: true},
  recipes: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
    }
  ],
});

const List: Model<IList> = model('List', listSchema)

export default List;