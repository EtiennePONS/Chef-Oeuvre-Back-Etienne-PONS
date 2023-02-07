import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VisuelsService } from './visuel.service';
import { CreateVisuelDto } from './dto/create-visuel.dto';
import { UpdateVisuelDto } from './dto/update-visuel.dto';

@Controller('visuel')
export class VisuelController {
  constructor(private readonly visuelService: VisuelsService) {}

  @Post()
  create(@Body() createVisuelDto: CreateVisuelDto) {
    return this.visuelService.create(createVisuelDto);
  }

  @Get()
  findAll() {
    return this.visuelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visuelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVisuelDto: UpdateVisuelDto) {
    return this.visuelService.update(+id, updateVisuelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.visuelService.remove(+id);
  }
}
