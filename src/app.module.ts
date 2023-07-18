import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantModule } from './restaurant/restaurant.module'; // <- Check the path and the module name.

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    RestaurantModule, // <- The RestaurantModule should be imported here.
  ],
})
export class AppModule {}
