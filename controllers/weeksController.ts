import Week, { IWeek } from '../models/Week';
import User, { IUser } from '../models/User';
import { Request, Response, NextFunction } from 'express';

const index = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const foundWeeks: IWeek[] = await Week.find({});
        if (foundWeeks.length === 0) return res.json({ message: 'No weeks found in database' });
        res.json({ weeks: foundWeeks });
    } catch (err: unknown) {
        next(err);
    }
}

const show = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const foundWeek: IWeek | null = await Week.findById({ _id: req.params.id });
        if (!foundWeek) return res.json({ message: 'Week not found in database' });
        res.json({ week: foundWeek });
    } catch (err: unknown) {
        next(err);
    }
}

const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: IUser | null = await User.findOne({ username: req.body.username });
        if (!user) return res.json({ message: 'User not found in database' });
        const newWeek: IWeek = await Week.create(req.body);
        user.weeks.push(newWeek._id);
        await user.save();
        res.status(201).json({ week: newWeek });
    } catch (err: unknown) {
        next(err);
    }
}

const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: IUser | null = await User.findOne({ username: req.body.username });
        if (!user) return res.json({ message: 'User not found in database' });
        const updatedWeek: IWeek | null = await Week.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true },
        );
        if (!updatedWeek) return res.json({ message: 'Week not found in database' });
        res.status(201).json({ week: updatedWeek });
    } catch (err: unknown) {
        next(err);
    }
}

const destroy = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: IUser | null = await User.findOne({ username: req.body.username });
        if (!user) return res.json({ message: 'User not found in database' });
        const deletedWeek: IWeek | null = await Week.findByIdAndDelete({ _id: req.params.id });
        if (!deletedWeek) return res.json({ message: 'Week not found in database' });
        user.weeks = user.weeks.filter(week => week !== deletedWeek._id);
        await user.save();
        res.json({ week: deletedWeek });
    } catch (err: unknown) {
        next(err);
    }
}

export { index, show, create, update, destroy }