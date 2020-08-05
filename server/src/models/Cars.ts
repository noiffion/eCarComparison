import mongoose from 'mongoose';
import { ICar } from './interfaces';

const Cars: mongoose.Schema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  cardPics: {
    type: [String],
    required: true,
  },
  detailPics: {
    type: [String],
    required: true,
  },
  powertrain: {
    type: String,
    required: true,
  },
  range: {
    type: Number,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  bodyStyle: {
    type: String,
    required: true,
  },
  doors: {
    type: Number,
    required: true,
  },
  msrp: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
  },
});

export default mongoose.model<ICar>('cars', Cars);
