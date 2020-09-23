import express from 'express';
import controller from '../controller';
import authCheck from '../utils/authCheck';
const router = express.Router();

router.get('/cars', controller.getECars);
router.get('/cars/:carId', controller.getOneCar);

router.post('/signup', controller.signUp);
router.post('/signin', controller.signIn);
router.get('/profile', authCheck, controller.profile);
router.get('/profile/pic', authCheck, controller.getAWSSignedUrl);
router.get('/profile/pic/:imgName', authCheck, controller.putAWSSignedUrl);
router.post('/profile/pic', authCheck, controller.uploadProfilePic);

router.get('/reviews/:carId', controller.readRevs);
router.post('/reviews', authCheck, controller.createRev);
router.put('/reviews/:reviewId', authCheck, controller.updateRev);
router.delete('/reviews/:reviewId', authCheck, controller.deleteRev);

export default router;
