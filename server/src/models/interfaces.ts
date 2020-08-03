import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  _id: string;
  email: string;
  password: string;
  userName: string;
  userIcon?: string;
  firstName: string;
  lastName: string;
  favourites?: string[];
  reviews?: string[];
  lastLogin: Date;
}

export interface ICar extends mongoose.Document {
  _id: string;
  manufacturer: string;
  logo: string;
  name: string;
  cardPics: string[];
  detailPics: string[];
  powertrain: string;
  class: string;
  bodyStyle: string;
  doors: number;
  msrp: number;
  rating: number;
}

export interface IReview extends mongoose.Document {
  _id: string;
  carId: string;
  userId: string;
  text: string;
  carRating: number;
  useful: number;
  createdAt: Date;
  updatedAt: Date;
}
