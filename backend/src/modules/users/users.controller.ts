import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
import { RolesGuard } from '@common/guards/roles.guard';
import { Roles } from '@common/decorators/roles.decorator';

@ApiTags('users')
@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Roles('DASSAULT_ADMIN', 'TATA_ADMIN')
  @ApiOperation({ summary: 'Get all users' })
  findAll(@Query() filters: any) {
    return this.usersService.findAll(filters);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID' })
  findOne(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Patch(':id')
  @Roles('DASSAULT_ADMIN', 'TATA_ADMIN')
  @ApiOperation({ summary: 'Update user' })
  update(@Param('id') id: string, @Body() updateData: any) {
    return this.usersService.update(id, updateData);
  }

  @Delete(':id')
  @Roles('DASSAULT_ADMIN')
  @ApiOperation({ summary: 'Delete user (soft delete)' })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
