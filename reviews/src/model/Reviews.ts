import mongoose from 'mongoose';
import { IReview } from './index.d';

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
    userFirstName: {
      type: String,
      required: true,
    },
    userLastName: {
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
    voters: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model<IReview>('reviews', Reviews);
