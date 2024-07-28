import express from 'express';
import { test } from '../contrillers/userCrontroller.js';
const router = express.Router();
router.get("/test", test);
export default router;