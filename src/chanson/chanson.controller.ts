import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChansonsService } from './chanson.service';
import { CreateChansonDto } from './dto/create-chanson.dto';
import { UpdateChansonDto } from './dto/update-chanson.dto';

@Controller('chanson')
export class ChansonController {
  constructor(private readonly chansonService: ChansonsService) {}

  @Post()
  create(@Body() createChansonDto: CreateChansonDto) {
    return this.chansonService.create(createChansonDto);
  }

  @Get()
  findAll() {
    return this.chansonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chansonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChansonDto: UpdateChansonDto) {
    return this.chansonService.update(+id, updateChansonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chansonService.remove(+id);
  }
}
