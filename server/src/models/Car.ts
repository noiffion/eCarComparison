import mongoose from 'mongoose';

export interface ICar extends mongoose.Document {
  name: string;
  type: string;
  medianPrice: number;
}

const CarSchema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    medianPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ICar>('Car', CarSchema);
