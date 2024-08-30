import express from 'express';
import { forgotPassword, google, signin, singup } from '../contrillers/authController.js';
import { signOut } from '../contrillers/userCrontroller.js';
const router = express.Router();


router.post("/singup", singup);
router.post("/singin", signin);
router.post('/google', google);
router.get('/signout', signOut)
router.post('/forgot', forgotPassword)



export default router;