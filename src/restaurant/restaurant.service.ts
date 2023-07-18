import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant, RestaurantDocument } from './entities/restaurant.schema';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name)
    private restaurantModel: Model<RestaurantDocument>,
  ) {}

  async create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    const createdRestaurant = new this.restaurantModel(createRestaurantDto);
    return createdRestaurant.save();
  }

  async findAll(): Promise<Restaurant[]> {
    return this.restaurantModel.find({ isDeleted: false }).exec();
  }

  async findOne(id: string): Promise<Restaurant> {
    return this.restaurantModel.findOne({ _id: id, isDeleted: false }).exec();
  }

  async update(
    id: string,
    updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantModel.findByIdAndUpdate(id, updateRestaurantDto, {
      new: true,
    });
  }

  async softDelete(id: string): Promise<Restaurant> {
    return this.restaurantModel.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true },
    );
  }

  async findByCategory(category: string): Promise<Restaurant[]> {
    return this.restaurantModel.find({ category, isDeleted: false }).exec();
  }
}
