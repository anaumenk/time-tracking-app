import { Body, Controller, Get, Post } from '@nestjs/common';
import { EntriesService } from './entries.service';
import { CreateEntryDto } from './dto/create-entry.dto';

@Controller('entries')
export class EntriesController {
  constructor(private readonly entriesService: EntriesService) {}

  @Post()
  create(@Body() dto: CreateEntryDto) {
    return this.entriesService.createEntry(dto);
  }

  @Get()
  findAll() {
    return this.entriesService.getAllEntries();
  }
}
