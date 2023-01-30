import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssNoteCommandeService } from './ass-note-commande.service';
import { CreateAssNoteCommandeDto } from './dto/create-ass-note-commande.dto';
import { UpdateAssNoteCommandeDto } from './dto/update-ass-note-commande.dto';

@Controller('ass-note-commande')
export class AssNoteCommandeController {
  constructor(private readonly assNoteCommandeService: AssNoteCommandeService) {}

  @Post()
  create(@Body() createAssNoteCommandeDto: CreateAssNoteCommandeDto) {
    return this.assNoteCommandeService.create(createAssNoteCommandeDto);
  }

  @Get()
  findAll() {
    return this.assNoteCommandeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assNoteCommandeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssNoteCommandeDto: UpdateAssNoteCommandeDto) {
    return this.assNoteCommandeService.update(+id, updateAssNoteCommandeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assNoteCommandeService.remove(+id);
  }
}
