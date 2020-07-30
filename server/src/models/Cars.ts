import mongoose from 'mongoose';
import { Car } from './interfaces';

const Cars: mongoose.Schema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
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

export default mongoose.model<Car>('cars', Cars);
