import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import connectToMongoDB from './db/connectToMongoDB.js';

dotenv.config();

import { app, server, io } from './socket/socket.js';

const PORT = process.env.PORT || 9000;

//middlewares
app.use(express.json());
app.use(cookieParser());

//routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server connected at PORT ${PORT}...`);
});
