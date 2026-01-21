import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEntryDto } from './dto/create-entry.dto';

@Injectable()
export class EntriesService {
  constructor(private readonly prisma: PrismaService) {}

  async createEntry(dto: CreateEntryDto) {
    const date = new Date(dto.date);

    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const result = await this.prisma.timeEntry.aggregate({
      where: {
        date: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      _sum: {
        hours: true,
      },
    });

    const totalHours = result._sum.hours ?? 0;

    if (totalHours + dto.hours > 24) {
      throw new BadRequestException(
        'Total working hours per day cannot exceed 24',
      );
    }

    return this.prisma.timeEntry.create({
      data: {
        date,
        project: dto.project,
        hours: dto.hours,
        description: dto.description,
      },
    });
  }

  async getAllEntries() {
    return this.prisma.timeEntry.findMany({
      orderBy: {
        date: 'desc',
      },
    });
  }
}
