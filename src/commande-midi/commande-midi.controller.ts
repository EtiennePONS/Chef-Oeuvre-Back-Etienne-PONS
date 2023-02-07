import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommandesMidiService } from './commande-midi.service';
import { CreateCommandeMidiDto } from './dto/create-commande-midi.dto';
import { UpdateCommandeMidiDto } from './dto/update-commande-midi.dto';

@Controller('commande-midi')
export class CommandesMidiController {
  constructor(private readonly commandeMidiService: CommandesMidiService) {}

  @Post()
  create(@Body() createCommandeMidiDto: CreateCommandeMidiDto) {
    return this.commandeMidiService.create(createCommandeMidiDto);
  }

  @Get()
  findAll() {
    return this.commandeMidiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commandeMidiService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCommandeMidiDto: UpdateCommandeMidiDto,
  ) {
    return this.commandeMidiService.update(+id, updateCommandeMidiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commandeMidiService.remove(+id);
  }
}
