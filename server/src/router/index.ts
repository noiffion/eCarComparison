import express from 'express';
const router = express.Router();
import controller from '../controller';

router.get('/cars', controller.getCars);
router.get('/cars/:carId', controller.getOneCar);

router.post('/signup', controller.signUp);
router.post('/login', controller.login);
router.get('/profile', controller.profile);

router.get('/reviews/:carId', controller.readRevs);
router.post('/review', controller.createRev);
router.put('/review/:reviewId', controller.updateRev);
router.delete('/review/:reviewId', controller.deleteRev);

export default router;
