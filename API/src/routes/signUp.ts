import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({message: 'Estas dentro nena'});
});

export default router;