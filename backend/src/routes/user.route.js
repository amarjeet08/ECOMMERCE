import express from 'express';
import signupController from '../controllers/signup.controller.js'
import loginController from '../controllers/login.controller.js'
import logoutController from '../controllers/logout.controller.js'

const router = express.Router();

router.post('/signup', signupController)
router.post('/login', loginController)
router.post('/logout', logoutController)

export default router;
