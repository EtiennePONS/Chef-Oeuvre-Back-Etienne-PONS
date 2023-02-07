import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVisuelDto } from './dto/create-visuel.dto';
import { UpdateVisuelDto } from './dto/update-visuel.dto';
import { Visuel } from './entities/visuel.entity';

@Injectable()
export class VisuelsService {
  constructor(
    @InjectRepository(Visuel)
    private visuelRepository: Repository<Visuel>,
  ) {}
  async create(createVisuelDto: CreateVisuelDto): Promise<Visuel> {
    return await this.visuelRepository.save(createVisuelDto);
    // Cette action permet de creer un nouveau visuel;
  }

  async findAll(): Promise<Visuel[]> {
    return await this.visuelRepository.find();
    // Cette action renvoi l'ensemble des visuels;
  }

  async findOne(idValue: number): Promise<Visuel> {
    const visuelfound = await this.visuelRepository.findOneBy({
      id: idValue,
    });
    if (!visuelfound) {
      throw new NotFoundException(
        `Désolé, nous n'avons pas trouvé de visuel avec l'id ${idValue}`,
      );
    }
    return visuelfound;
    // Cette action permet de renvoyer un visuel par son id;
  }

  async update(id: number, updateVisuelDto: UpdateVisuelDto): Promise<Visuel> {
    const upViuel = await this.findOne(id);
    upViuel.Visuel = updateVisuelDto.Visuel;
    upViuel.Commentaire = updateVisuelDto.Commentaire;
    upViuel.NoteString = updateVisuelDto.NoteString;
    return await this.visuelRepository.save(upViuel);
    // Cette action permet de modifier un visuel par son id;
  }

  async remove(id: number): Promise<string> {
    const Result = await this.visuelRepository.delete({ id });
    if (Result.affected === 0) {
      throw new NotFoundException(
        `Suppression impossible, car il n'y a pas de visuel avec l'id ${id}`,
      );
    }
    return `Bravo: Le visuel avec l'id ${id} a bien été supprimé...`;
  }
  // Cette action permet de supprimer un visuel par son id;
}
