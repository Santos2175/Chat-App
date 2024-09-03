import { Router } from 'express';
import privateRoute from '../middlewares/privateRoute.js';
import { getUserSidebar } from '../controllers/user.controller.js';

const router = Router();

router.get('/', privateRoute, getUserSidebar);

export default router;
