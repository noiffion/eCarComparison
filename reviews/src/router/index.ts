import express from 'express';
import controller from '../controller';
import authCheck from '../utils/authCheck';
const router = express.Router();

router.get('/reviews/:carId', controller.readRevs);
router.post('/reviews', authCheck, controller.createRev);
router.put('/reviews/:reviewId', authCheck, controller.updateRev);
router.delete('/reviews/:reviewId', authCheck, controller.deleteRev);

export default router;
