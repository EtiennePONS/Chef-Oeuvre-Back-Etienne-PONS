import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NoteMidiService } from './note-midi.service';
import { CreateNoteMidiDto } from './dto/create-note-midi.dto';
import { UpdateNoteMidiDto } from './dto/update-note-midi.dto';

@Controller('note-midi')
export class NoteMidiController {
  constructor(private readonly noteMidiService: NoteMidiService) {}

  @Post()
  create(@Body() createNoteMidiDto: CreateNoteMidiDto) {
    return this.noteMidiService.create(createNoteMidiDto);
  }

  @Get()
  findAll() {
    return this.noteMidiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noteMidiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteMidiDto: UpdateNoteMidiDto) {
    return this.noteMidiService.update(+id, updateNoteMidiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noteMidiService.remove(+id);
  }
}
