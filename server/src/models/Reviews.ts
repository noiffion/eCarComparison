import mongoose from 'mongoose';

const Reviews: mongoose.Schema = new mongoose.Schema(
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
    carRating: {
      type: Number,
    },
    useful: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model('reviews', Reviews);