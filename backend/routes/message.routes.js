import { Router } from 'express';
import { getMessages, sendMessage } from '../controllers/message.controller.js';
import privateRoute from '../middlewares/privateRoute.js';

const router = Router();

//@route  POST api/messages/send/:id
//@desc   it sends messages
//@access Private
router.post('/send/:id', privateRoute, sendMessage);

//@route  GET api/messages/:id
//@desc   it gets sent messages
//@access Private
router.get('/:id', privateRoute, getMessages);

export default router;
