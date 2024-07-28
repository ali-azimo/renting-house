import express from 'express';
import { signin, singup } from '../contrillers/authController.js';
const router = express.Router();


router.post("/singup", singup);
router.post("/singin", signin);


export default router;