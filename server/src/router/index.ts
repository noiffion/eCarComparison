import express from 'express';
const router = express.Router();
import controller from '../controller';

router.get('/cars', controller.getCars);
router.get('/cars/:carId', controller.getOneCar);

router.post('/signup', controller.signUp);
router.post('/login', controller.login);
router.get('/profile', controller.profile);

router.get('/reviews', controller.readRevs);
router.post('/reviews', controller.createRev);
router.put('/reviews/:reviewId', controller.updateRev);
router.delete('/reviews/:reviewId', controller.deleteRev);

export default router;
