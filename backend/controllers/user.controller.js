import User from '../models/user.model.js';

export const getUserSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select('-password');

    res.status(200).json(filteredUsers);
  } catch (err) {
    console.error('Error at getUserSidebar controller ', err.message);
    res.status(500).json({ error: 'Server Error' });
  }
};
