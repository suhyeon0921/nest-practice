import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RestaurantDocument = Restaurant & Document;

@Schema()
export class Restaurant {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  category: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
