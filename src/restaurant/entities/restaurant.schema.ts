import mongoose, { Document, Schema } from 'mongoose';

export interface IRestaurant extends Document {
  name: string;
  category: string;
  createAt: Date;
  deleteAt: Date | null;
}

const RestaurantSchema = new Schema<IRestaurant>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
  deleteAt: { type: Date, default: null },
});

export default mongoose.model<IRestaurant>('Restaurant', RestaurantSchema);
