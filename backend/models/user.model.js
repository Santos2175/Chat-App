import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  profilePic: {
    type: String,
    default: '',
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female'],
  },
});

const User = model('user', userSchema);

export default User;
