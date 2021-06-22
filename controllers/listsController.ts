import List, { IList } from '../models/List';
import User, { IUser } from '../models/User';
import { Request, Response, NextFunction } from 'express';

const index = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const foundLists: IList[] = await List.find({});
        if (foundLists.length === 0) return res.json({ message: 'No lists in database'});
        res.json(foundLists);
    } catch (err: unknown) {
        next(err);
    };
};

const show = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const foundList: IList | null = await List.findById({ _id: req.params.id });
        if (!foundList) return res.json({ message: 'List not found in database' });
        res.json(foundList);
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
        res.status(201).json(newList);
    } catch (err: unknown) {
        next(err);
    }
}

const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const list: IList | null = await List.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            { new:true },
        );
        if (!list) return res.json({ message: 'List not found in database' });
        res.status(201).json(list);
    } catch (err: unknown) {
        next(err);
    }
}

const destroy = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const deletedList: IList | null = await List.findByIdAndDelete({ _id: req.params.id });
        if (!deletedList) return res.json({ message: 'List not found in database' });
        const user: IUser | null = await User.findOne({ username: deletedList.username })
        if (!user) return res.json({ message: 'User not found in database' });
        user.lists = user.lists.filter(list => list !== deletedList._id);
        await user.save();
        res.json(deletedList);
    } catch (err: unknown) {
        next(err);
    }
}

export { index, show, create, update, destroy };