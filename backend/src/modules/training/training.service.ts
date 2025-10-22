import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
@Injectable()
export class TrainingService {
  constructor(private prisma: PrismaService) {}
  async getAll() { return { message: 'Training module - Coming soon' }; }
}
