import mongoose from 'mongoose';

export interface ICar extends mongoose.Document {
  name: string;
  type: string;
}

const CarSchema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.model<ICar>('Car', CarSchema)
