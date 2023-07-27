import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  async create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewService.create(createReviewDto);
  }

  @Get()
  async findAll() {
    return this.reviewService.findAll();
  }

  @Get(':_id')
  async findOne(@Param('_id') _id: string) {
    return this.reviewService.findOne(_id);
  }

  @Put(':_id')
  async update(
    @Param('_id') _id: string,
    @Body() updateReviewDto: UpdateReviewDto,
  ) {
    return this.reviewService.update(_id, updateReviewDto);
  }

  @Delete(':_id')
  async Delete(@Param('_id') _id: string) {
    return this.reviewService.hardDelete(_id);
  }
}
