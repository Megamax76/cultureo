import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
@Injectable()
export class AnalyticsService {
  constructor(private prisma: PrismaService) {}
  async getAll() { return { message: 'Analytics module - Coming soon' }; }
}
