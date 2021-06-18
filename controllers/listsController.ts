import List, { IList } from '../models/List';
import User, { IUser } from '../models/User';
import { Request, Response, NextFunction } from 'express';

const index = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const foundLists: IList[] = await List.find({});
        if (foundLists.length === 0) return res.json({ message: 'No lists in database'});
        res.json({ lists: foundLists });
    } catch (err: unknown) {
        next(err);
    };
};

const show = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const foundList: IList | null = await List.findById({ _id: req.params.id });
        if (!foundList) return res.json({ message: 'List not found in database' });
        res.json({ list: foundList });
    } catch (err: unknown) {
        next(err);
    };
};

const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: IUser | null = await User.findOne({ username: req.body.username });
        if (!user) return res.json({ message: 'User not found in database' });
        const newList: IList = await List.create(req.body);
        user.lists.push(newList._id);
        await user.save();
        res.status(201).json({ list: newList });
    } catch (err: unknown) {
        next(err);
    }
}

export { index, show, create };