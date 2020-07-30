import express from 'express';
import controller from '../controller';
import checkAuth from '../utils/checkAuth';
const router = express.Router();

router.get('/cars', controller.getCars);
router.get('/cars/:carId', controller.getOneCar);

router.post('/signup', controller.signUp);
router.post('/login', controller.login);
router.get('/profile', checkAuth, controller.profile);

router.get('/reviews', controller.readRevs);
router.post('/reviews', checkAuth, controller.createRev);
router.put('/reviews/:reviewId', checkAuth, controller.updateRev);
router.delete('/reviews/:reviewId', checkAuth, controller.deleteRev);

export default router;
