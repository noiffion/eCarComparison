import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  _id: string;
  email: string;
  password?: string;
  userIcon?: string;
  firstName: string;
  lastName: string;
  favourites?: string[];
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
}
