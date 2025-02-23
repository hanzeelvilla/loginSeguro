import {Router} from 'express';
import {usersMiddleware} from '../middleware/usersMiddleware.js';
import signUpController from '../controllers/signUpController.js';

const router = Router();

router.post('/', usersMiddleware.validateSignUp, (req, res, next) => {
    signUpController(req, res);
});

export default router;