import express from 'express';
import { index, show, create, update, destroy } from '../controllers/usersController';

const router = express.Router();

router.get('/', index);
router.get('/:username', show);
router.post('/', create);
router.put('/:username', update);
router.delete('/:username', destroy);

export default router;