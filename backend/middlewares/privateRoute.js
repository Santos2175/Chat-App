import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const privateRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(400)
        .json({ error: 'Unauthorized - No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(400).json({ msg: 'Unauthorized - Invalid token' });
    }

    const user = await User.findById(decoded.userId).select('-password');

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    req.user = user;

    next();
  } catch (err) {
    console.error('Error in token validation', err.message);
    res.status(500).json({ error: 'Server Error' });
  }
};

export default privateRoute;
