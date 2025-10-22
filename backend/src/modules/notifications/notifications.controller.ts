import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { NotificationsService } from './notifications.service';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
@ApiTags('notifications') @Controller('notifications') @UseGuards(JwtAuthGuard) @ApiBearerAuth()
export class NotificationsController {
  constructor(private readonly service: NotificationsService) {}
  @Get() getAll() { return this.service.getAll(); }
}
