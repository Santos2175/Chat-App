import { Router } from 'express';
import { login, logout, signup } from '../controllers/auth.controller.js';

const router = Router();

//@route  POST /api/auth/signup
//@desc   user signup
//@access Public
router.post('/signup', signup);

//@route  POST /api/auth/login
//@desc   user login
//@access Public
router.post('/login', login);

//@route  GET /api/auth/logout
//@desc   user logout
//@access Private
router.post('/logout', logout);

export default router;
