import mongoose from 'mongoose';
import { IUser } from './index.d';

const Users: mongoose.Schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    userIcon: {
      type: String,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    favourites: {
      type: [String],
    },
    lastLogin: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>('users', Users);
