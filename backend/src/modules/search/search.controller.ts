import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { SearchService } from './search.service';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
@ApiTags('search') @Controller('search') @UseGuards(JwtAuthGuard) @ApiBearerAuth()
export class SearchController {
  constructor(private readonly service: SearchService) {}
  @Get() getAll() { return this.service.getAll(); }
}
