import express from 'express';
const router = express.Router();
import controller from '../controller';

router.get('/cars', controller.getCars);
router.get('/cars/:carId', controller.getOneCar);

router.post('/signup', controller.signUp);
router.post('/login', controller.login);
router.get('/profile', controller.profile);

router.get('/messages/:carId', controller.readMsgs);
router.post('/message', controller.createMsg);
router.put('/message/:messageId', controller.updateMsg);
router.delete('/message/:messageId', controller.deleteMsg);

export default router;
