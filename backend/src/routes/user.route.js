import express from 'express';
import signupController from '../controllers/signup.controller.js'
import loginController from '../controllers/login.controller.js'
import logoutController from '../controllers/logout.controller.js'
import forgetPassword from '../controllers/forgetPassword.controller.js';
import resetPassword from '../controllers/resetPassword.controller.js';
import checkOutController from '../controllers/checkOut.controller.js';

const router = express.Router();

router.post('/signup', signupController)
router.post('/login', loginController)
router.post('/logout', logoutController)
router.post('/forgetpassword', forgetPassword)
router.post('/resetpassword', resetPassword)
router.post('/checkout', checkOutController)

export default router;
