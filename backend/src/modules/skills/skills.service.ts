import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
@Injectable()
export class SkillsService {
  constructor(private prisma: PrismaService) {}
  async findAll(filters?: any) {
    return this.prisma.skill.findMany({ where: filters, orderBy: { createdAt: 'desc' } });
  }
  async findOne(id: string) {
    return this.prisma.skill.findUnique({ where: { id } });
  }
}
