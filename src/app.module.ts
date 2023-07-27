import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantModule } from './restaurant/restaurant.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    RestaurantModule,
    ReviewModule,
  ],
})
export class AppModule {}
