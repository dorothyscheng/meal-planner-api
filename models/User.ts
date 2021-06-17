import { Document, Model, model, Schema } from 'mongoose';

export interface IUser extends Document {
    username: string,
    password: string,
    email: string,
    familySize: number,
    lists: Schema.Types.ObjectId[],
    weeks: Schema.Types.ObjectId[],
}

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    familySize: Number,
    lists: [
        {
            type: Schema.Types.ObjectId,
            ref: 'List',
        }
    ],
    weeks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Week',
        }
    ],
});

const User: Model<IUser> = model('User', userSchema)

export default User;