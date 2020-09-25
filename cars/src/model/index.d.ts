import mongoose from 'mongoose';

export interface ICar extends mongoose.Document {
  _id: string;
  manufacturer: string;
  logo: string;
  name: string;
  cardPics: string[];
  detailPics: string[];
  powertrain: string;
  range: number;
  class: string;
  bodyStyle: string;
  doors: number;
  msrp: number;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}
