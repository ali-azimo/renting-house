import express from 'express';
import { singup } from '../contrillers/authController.js';
const router = express.Router();


router.post("/singup", singup);


export default router;