import mongoose from 'mongoose';

const Messages: mongoose.Schema = new mongoose.Schema(
  {
    carId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    vote: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('messages', Messages);
