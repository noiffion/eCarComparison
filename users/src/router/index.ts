import express from 'express';
import controller from '../controller';
import authCheck from '../utils/authCheck';
const router = express.Router();

router.post('/signup', controller.signUp);
router.post('/signin', controller.signIn);
router.get('/profile', authCheck, controller.profile);
router.get('/profile/pic/:imgName', authCheck, controller.putSignedUrl);
router.put('/profile/pic', authCheck, controller.uploadProfilePic);

export default router;
