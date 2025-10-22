import { Controller, Get, Query, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { SkillsService } from './skills.service';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
@ApiTags('skills') @Controller('skills') @UseGuards(JwtAuthGuard) @ApiBearerAuth()
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}
  @Get() findAll(@Query() filters: any) { return this.skillsService.findAll(filters); }
  @Get(':id') findOne(@Param('id') id: string) { return this.skillsService.findOne(id); }
}
