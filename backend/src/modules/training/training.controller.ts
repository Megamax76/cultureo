import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { TrainingService } from './training.service';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
@ApiTags('training') @Controller('training') @UseGuards(JwtAuthGuard) @ApiBearerAuth()
export class TrainingController {
  constructor(private readonly service: TrainingService) {}
  @Get() getAll() { return this.service.getAll(); }
}
