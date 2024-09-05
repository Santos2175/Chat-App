import { Router } from 'express';
import privateRoute from '../middlewares/privateRoute.js';
import { getUserSidebar } from '../controllers/user.controller.js';

const router = Router();

//@route  GET /api/users
//@desc   get all the users
//@access private
router.get('/', privateRoute, getUserSidebar);

export default router;
