import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { ToolsService } from './tools.service';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
@ApiTags('tools') @Controller('tools') @UseGuards(JwtAuthGuard) @ApiBearerAuth()
export class ToolsController {
  constructor(private readonly service: ToolsService) {}
  @Get() getAll() { return this.service.getAll(); }
}
