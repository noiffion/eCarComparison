import express from 'express';
import controller from '../controller';
import authCheck from '../utils/authCheck';
const router = express.Router();

router.get('/cars', controller.getECars);
router.get('/cars/:carId', controller.getOneCar);

export default router;
