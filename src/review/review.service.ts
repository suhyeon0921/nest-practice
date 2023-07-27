import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review, ReviewDocument } from './entities/review.schema';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name)
    private readonly reviewModel: Model<ReviewDocument>,
  ) {}

  async create(createReviewDto: CreateReviewDto): Promise<Review> {
    const createdReview = new this.reviewModel(createReviewDto);
    return createdReview.save();
  }

  async findAll(): Promise<Review[]> {
    return this.reviewModel.find({ isDeleted: false }).exec();
  }

  async findOne(id: string): Promise<Review> {
    return this.reviewModel.findById({ _id: id, isDeleted: false }).exec();
  }

  async update(id: string, updateReviewDto: UpdateReviewDto): Promise<Review> {
    return this.reviewModel.findByIdAndUpdate(id, updateReviewDto, {
      new: true,
    });
  }

  async hardDelete(id: string): Promise<Review> {
    return this.reviewModel.findByIdAndRemove(id);
  }
}
