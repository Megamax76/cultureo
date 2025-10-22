import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
@Injectable()
export class ToolsService {
  constructor(private prisma: PrismaService) {}
  async getAll() { return { message: 'Tools module - Coming soon' }; }
}
