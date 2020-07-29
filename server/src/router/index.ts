'use strict';

import express from 'express';
const router = express.Router();
import controller from '../controller';


router.get('/cars', controller.getCars);
router.get('/cars/:carId', controller.getOneCar);

router.post('/signup', controller.signUp);
router.post('/login', controller.login);

router.get('/messages/:carId', controller.getMessages);
router.post('/message', controller.postMessage);
router.put('/message/:messageId', controller.updateMessage);
router.delete('/message/:messageId', controller.deleteMessage);

export default router;
