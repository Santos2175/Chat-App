import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';
import { getReceiverSocketId, io } from '../socket/socket.js';

//controller for handling sending messages
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    //await conversation.save()
    //await newMessage.save()

    await Promise.all([conversation.save(), newMessage.save()]);

    //SOCKET IO functionality will go here
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      //io.to(<socket id>).emit() used to send events to specific client
      io.to(receiverSocketId).emit('newMessage', newMessage);
    }

    res.status(200).json(newMessage);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server Error' });
  }
};

//controller for handling getting messages
export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate('messages');

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (err) {
    console.error('Error at getmessage controller', err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};
