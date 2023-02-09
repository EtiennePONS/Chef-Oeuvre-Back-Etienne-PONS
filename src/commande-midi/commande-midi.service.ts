import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommandeMidiDto } from './dto/create-commande-midi.dto';
import { UpdateCommandeMidiDto } from './dto/update-commande-midi.dto';
import { CommandeMidi } from './entities/commande-midi.entity';

@Injectable()
export class CommandesMidiService {
  constructor(
    @InjectRepository(CommandeMidi)
    private commandeMidiRepository: Repository<CommandeMidi>,
  ) {}
  async create(createCommandeMidiDto: CreateCommandeMidiDto) {
    return await this.commandeMidiRepository.save(createCommandeMidiDto);
    // Cette action permet de creer une nouvelle commande-Midi;
  }

  async findAll(): Promise<CommandeMidi[]> {
    return await this.commandeMidiRepository.find();
    // Cette action renvoi l'ensemble des commandes-Midi;
  }

  async findOne(idValue: number): Promise<CommandeMidi> {
    const commandeMidifound = await this.commandeMidiRepository.findOneBy({
      id: idValue,
    });
    if (!commandeMidifound) {
      throw new NotFoundException(
        `Désolé, nous n'avons pas trouvé de commande MIDI avec l'id ${idValue}`,
      );
    }
    return commandeMidifound;
    // Cette action permet de renvoyer une commande-Midi par son id;
  }

  async update(
    id: number,
    updateCommandeMidiDto: UpdateCommandeMidiDto,
  ): Promise<CommandeMidi> {
    const upCommandeMidi = await this.findOne(id);
    upCommandeMidi.CommandeMidi = updateCommandeMidiDto.CommandeMidi;
    upCommandeMidi.Canalstring = updateCommandeMidiDto.Canalstring;
    return await this.commandeMidiRepository.save(upCommandeMidi);
    // Cette action permet de modifier une commande-Midi par son id;
  }

  async remove(id: number): Promise<string> {
    const Result = await this.commandeMidiRepository.delete({ id });
    if (Result.affected === 0) {
      throw new NotFoundException(
        `Suppression impossible, car il n'y a pas de Commande-Midi avec l'id ${id}`,
      );
    }
    return `Bravo: La Commande-Midi avec l'id ${id} a bien été supprimée...`;
  }
  // Cette action permet de supprimer une commande-Midi par son id;
}
