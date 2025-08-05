import { Router } from "express";
import { signupHandler,signInHandler } from "../controllers/authController.js";
const router = Router()
router.post("/signup",signupHandler)
router.post("/signin",signInHandler)
export default router