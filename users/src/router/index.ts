import express from 'express';
import controller from '../controller';
import authCheck from '../utils/authCheck';

const router = express.Router();

router.post('/users/signup', controller.signUp);
router.post('/users/signin', controller.signIn);
router.get('/users/profile', authCheck, controller.profile);
router.get('/users/profile/pic/:imgName', authCheck, controller.putSignedUrl);
router.put('/users/profile/pic', authCheck, controller.uploadProfilePic);

export default router;
