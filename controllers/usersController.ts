import bcrypt from 'bcrypt';
import User, { IUser } from '../models/User';
import List, { IList } from '../models/List';
import Week from '../models/Week';
import { Request, Response, NextFunction } from 'express';

const saltRounds = 10;

const index = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const foundUsers: IUser[] = await User.find({})
            .populate('lists')
            .populate('weeks');
        if (foundUsers.length === 0) return res.json({ message: 'No users in database' });
        res.json(foundUsers);
    } catch (err: unknown) {
        next(err);
    }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const foundUser: IUser | null = await User.findOne({ username: req.body.username })
            .populate('lists')
            .populate('weeks');
        if (!foundUser) return res.json({ message: 'Authentication failed' });
        const match: boolean = await bcrypt.compare(req.body.password, foundUser.password);;
        if (!match) return res.json({ message: 'Authentication failed' });
        res.json(foundUser);
    } catch (err: unknown) {
        next(err);
    }
}

const show = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const foundUser: IUser | null = await User.findOne({ username: req.params.username })
            .populate('lists')
            .populate('weeks');
        if (!foundUser) return res.json({ message: 'User not found in database' });
        res.json(foundUser);
    } catch (err: unknown) {
        next(err);
    }
}

const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        req.body.username = req.body.username.replace(/[^a-zA-Z1-9]/g, "");
        let existingUser: IUser | null = await User.findOne({ username: req.body.username });
        if (existingUser) return res.json({ message: 'Username is not available' });
        existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) return res.json({ message: 'Email address is already in use' });
        const hashedPw = await bcrypt.hash(req.body.password, saltRounds);
        req.body.password = hashedPw;
        const newUser = await User.create(req.body);
        const faveList: IList = await List.create({ name: 'Favorites', username: req.body.username });
        newUser.lists.push(faveList._id);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err: unknown) {
        next(err);
    }
}

const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updatedUser: IUser | null = await User.findOneAndUpdate(
            { username: req.params.username },
            req.body,
            { new: true },
        )
            .populate('lists')
            .populate('weeks');
        if (!updatedUser) return res.json({ message: 'User not found in database' });
        res.status(201).json(updatedUser);
    } catch (err: unknown) {
        next(err);
    }
}

const destroy = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const deletedUser: IUser | null = await User.findOneAndDelete({ username: req.params.username });
        if (!deletedUser) return res.json({ message: 'User not found in database' });
        deletedUser.lists.forEach(async list => await List.findByIdAndDelete({ _id: list}));
        deletedUser.weeks.forEach(async week => await Week.findByIdAndDelete({ _id: week }));
        res.json(deletedUser);
    } catch (err: unknown) {
        next(err);
    }
}

export { index, login, show, create, update, destroy };