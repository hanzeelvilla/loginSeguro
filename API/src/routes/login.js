import { Router } from 'express';
import loginController from '../controllers/loginController.js';

const router = Router();

router.post('/', (req, res) => {
    loginController(req, res);
});

export default router;