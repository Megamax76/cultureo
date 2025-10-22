import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    return this.prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
        language: data.language || 'en',
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        country: true,
        language: true,
        department: true,
        certificationLevel: true,
        createdAt: true,
      },
    });
  }

  async findAll(filters?: any) {
    return this.prisma.user.findMany({
      where: filters,
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        country: true,
        language: true,
        department: true,
        certificationLevel: true,
        isActive: true,
        createdAt: true,
        lastLogin: true,
      },
    });
  }

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        country: true,
        language: true,
        department: true,
        certificationLevel: true,
        avatarUrl: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
        lastLogin: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async update(id: string, data: any) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    return this.prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        country: true,
        language: true,
        department: true,
        certificationLevel: true,
        isActive: true,
      },
    });
  }

  async updateLastLogin(id: string) {
    return this.prisma.user.update({
      where: { id },
      data: { lastLogin: new Date() },
    });
  }

  async remove(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Soft delete
    return this.prisma.user.update({
      where: { id },
      data: { isActive: false },
    });
  }
}
