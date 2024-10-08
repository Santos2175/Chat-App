import mongoose from 'mongoose';

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log('MongoDB connected....');
  } catch (err) {
    console.log('Error connecting to database... ', err.message);
  }
};

export default connectToMongoDB;
