import { Router } from 'express';
import { login, logout, signup } from '../controllers/auth.controller.js';

const router = Router();

//@route  GET /api/auth/signup
//@desc   user signup
//@access Public
router.get('/signup', signup);

//@route  GET /api/auth/login
//@desc   user login
//@access Public
router.get('/login', login);

//@route  GET /api/auth/logout
//@desc   user logout
//@access Private
router.get('/logout', logout);

export default router;
