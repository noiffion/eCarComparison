import mongoose from 'mongoose';

export interface IReview extends mongoose.Document {
  _id: string;
  carId: string;
  userId: string;
  userFirstName: string;
  userLastName: string;
  text: string;
  carRating: number;
  useful: number;
  voters: string[];
  createdAt: Date;
  updatedAt: Date;
}
