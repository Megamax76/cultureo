import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { QualityService } from './quality.service';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
@ApiTags('quality') @Controller('quality') @UseGuards(JwtAuthGuard) @ApiBearerAuth()
export class QualityController {
  constructor(private readonly service: QualityService) {}
  @Get() getAll() { return this.service.getAll(); }
}
