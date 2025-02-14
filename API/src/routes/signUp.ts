import {Router} from 'express';
import {usersMiddleware} from '../middleware/usersMiddleware';

const router = Router();

router.post('/', usersMiddleware.validateSignUp, (req, res, next) => {
    res.json({message: 'Estas dentro nena'});
});

export default router;