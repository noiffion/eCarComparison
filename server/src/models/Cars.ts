import mongoose from 'mongoose';
import { Car } from './interfaces';

const Cars: mongoose.Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  medianPrice: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
  },
});

export default mongoose.model<Car>('cars', Cars);
