import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAssNoteCommandeDto } from './dto/create-ass-note-commande.dto';
import { UpdateAssNoteCommandeDto } from './dto/update-ass-note-commande.dto';
import { AssNoteCommande } from './entities/ass-note-commande.entity';

@Injectable()
export class AssNoteCommandeService {
  constructor(
    @InjectRepository(AssNoteCommande)
    private userRepository: Repository<AssNoteCommande>,
  ) {}
  create(createAssNoteCommandeDto: CreateAssNoteCommandeDto) {
    return 'This action adds a new assNoteCommande';
  }

  findAll() {
    return `This action returns all assNoteCommande`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assNoteCommande`;
  }

  update(id: number, updateAssNoteCommandeDto: UpdateAssNoteCommandeDto) {
    return `This action updates a #${id} assNoteCommande`;
  }

  remove(id: number) {
    return `This action removes a #${id} assNoteCommande`;
  }
}
