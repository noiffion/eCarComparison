import mongoose from 'mongoose';
import { IUser } from './models';

const Users: mongoose.Schema = new mongoose.Schema({
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
  reviews: {
    type: [String],
  },
  lastLogin: {
    type: Date,
    required: true,
  },
});

export default mongoose.model<IUser>('users', Users);
