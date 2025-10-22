import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AnalyticsService } from './analytics.service';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
@ApiTags('analytics') @Controller('analytics') @UseGuards(JwtAuthGuard) @ApiBearerAuth()
export class AnalyticsController {
  constructor(private readonly service: AnalyticsService) {}
  @Get() getAll() { return this.service.getAll(); }
}
