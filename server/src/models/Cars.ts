import mongoose from 'mongoose';

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

export default mongoose.model('cars', Cars);
