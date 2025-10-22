import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DocumentsService {
  constructor(private prisma: PrismaService) {}

  async findAll(filters?: any) {
    return this.prisma.document.findMany({
      where: filters,
      include: {
        createdBy: {
          select: { id: true, firstName: true, lastName: true, email: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    return this.prisma.document.findUnique({
      where: { id },
      include: { createdBy: true, validatedBy: true, skills: true },
    });
  }
}
