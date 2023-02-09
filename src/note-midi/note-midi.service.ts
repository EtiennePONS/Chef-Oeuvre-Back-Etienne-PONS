import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoteMidiDto } from './dto/create-note-midi.dto';
import { UpdateNoteMidiDto } from './dto/update-note-midi.dto';
import { NoteMidi } from './entities/note-midi.entity';

@Injectable()
export class NotesMidiService {
  constructor(
    @InjectRepository(NoteMidi)
    private noteMidiRepository: Repository<NoteMidi>,
  ) {}
  async create(createNoteMidiDto: CreateNoteMidiDto) {
    return await this.noteMidiRepository.save(createNoteMidiDto);
    // Cette action permet de creer une nouvelle note-midi;
  }

  async findAll(): Promise<NoteMidi[]> {
    return await this.noteMidiRepository.find();
    // Cette action renvoi l'ensemble des notes-Midi;
  }

  async findOne(idValue: number): Promise<NoteMidi> {
    const noteMidifound = await this.noteMidiRepository.findOneBy({
      id: idValue,
    });
    if (!noteMidifound) {
      throw new NotFoundException(
        `Désolé, nous n'avons pas trouvé de note MIDI avec l'id ${idValue}`,
      );
    }
    return noteMidifound;
    // Cette action permet de renvoyer une note-Midi par son id;
  }

  async update(
    id: number,
    updateNoteMidiDto: UpdateNoteMidiDto,
  ): Promise<NoteMidi> {
    const upNoteMidi = await this.findOne(id);
    upNoteMidi.NoteNumber = updateNoteMidiDto.NoteNumber;
    upNoteMidi.Vélocité = updateNoteMidiDto.Vélocité;
    upNoteMidi.NoteString = updateNoteMidiDto.NoteString;

    return await this.noteMidiRepository.save(upNoteMidi);
    // Cette action permet de modifier une note-Midi par son id;
  }

  async remove(id: number): Promise<string> {
    const Result = await this.noteMidiRepository.delete({ id });
    if (Result.affected === 0) {
      throw new NotFoundException(
        `Suppression impossible, car il n'y a pas de Note-Midi avec l'id ${id}`,
      );
    }
    return `Bravo: La Note-Midi avec l'id ${id} a bien été supprimée...`;
  }
  // Cette action permet de supprimer une note-Midi par son id;
}
