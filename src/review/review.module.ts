import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewSchema } from './entities/review.schema';
import { ReviewController } from './review.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Review', schema: ReviewSchema }]),
  ],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
