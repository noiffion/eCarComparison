import express from 'express';
import controller from '../controller';
import authCheck from '../utils/authCheck';
const router = express.Router();

router.get('/cars', controller.getCars);
router.get('/cars/:carId', controller.getOneCar);

router.post('/signup', controller.signUp);
router.post('/login', controller.login);
router.get('/profile', authCheck, controller.profile);

router.get('/reviews', controller.readRevs);
router.post('/reviews', authCheck, controller.createRev);
router.put('/reviews/:reviewId', authCheck, controller.updateRev);
router.delete('/reviews/:reviewId', authCheck, controller.deleteRev);

export default router;
