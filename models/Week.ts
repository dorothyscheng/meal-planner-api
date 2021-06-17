import { Document, Model, model, Schema } from 'mongoose';

export interface IWeek extends Document {
    name: string,
    mondayB: Schema.Types.ObjectId[],
    mondayL: Schema.Types.ObjectId[],
    mondayD: Schema.Types.ObjectId[],
    tuesdayB: Schema.Types.ObjectId[],
    tuesdayL: Schema.Types.ObjectId[],
    tuesdayD: Schema.Types.ObjectId[],
    wednesdayB: Schema.Types.ObjectId[],
    wednesdayL: Schema.Types.ObjectId[],
    wednesdayD: Schema.Types.ObjectId[],
    thursdayB: Schema.Types.ObjectId[],
    thursdayL: Schema.Types.ObjectId[],
    thursdayD: Schema.Types.ObjectId[],
    fridayB: Schema.Types.ObjectId[],
    fridayL: Schema.Types.ObjectId[],
    fridayD: Schema.Types.ObjectId[],
    saturdayB: Schema.Types.ObjectId[],
    saturdayL: Schema.Types.ObjectId[],
    saturdayD: Schema.Types.ObjectId[],
    sundayB: Schema.Types.ObjectId[],
    sundayL: Schema.Types.ObjectId[],
    sundayD: Schema.Types.ObjectId[],
}

const weekSchema: Schema = new Schema({
    name: {type: String, required: true},
    mondayB: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
    },
    mondayL: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
    },
    mondayD: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
    },
    tuesdayB: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
    },
    tuesdayL: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
    },
    tuesdayD: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
    },
    wednesdayB: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
    },
    wednesdayL: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
    },
    wednesdayD: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
    },
    thursdayB: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
    },
    thursdayL: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
    },
    thursdayD: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
    },
    fridayB: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
    },
    fridayL: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
    },
    fridayD: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
    },
    saturdayB: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
    },
    saturdayL: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
    },
    saturdayD: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
    },
    sundayB: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
    },
    sundayL: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
    },
    sundayD: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
    },
});

const Week: Model<IWeek> = model('Week', weekSchema)

export default Week;