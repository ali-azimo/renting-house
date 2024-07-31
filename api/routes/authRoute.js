import express from 'express';
import { google, signin, singup } from '../contrillers/authController.js';
const router = express.Router();


router.post("/singup", singup);
router.post("/singin", signin);
router.post('/google', google);


export default router;