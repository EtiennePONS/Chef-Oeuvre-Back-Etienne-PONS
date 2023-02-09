import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChargeDto } from './dto/charge-chanson.dto';
import { CreateChansonDto } from './dto/create-chanson.dto';
import { UpdateChansonDto } from './dto/update-chanson.dto';
import { Chanson } from './entities/chanson.entity';

@Injectable()
export class ChansonsService {
  constructor(
    @InjectRepository(Chanson)
    private chansonRepository: Repository<Chanson>,
  ) {}
  async create(CreateChansonDto: CreateChansonDto) {
    return await this.chansonRepository.save(CreateChansonDto);
    // Cette action permet de creer une nouvelle chanson;
  }
  async charge(chargeDto: ChargeDto): Promise<Chanson> {
    const PgmMidi = chargeDto.PgmMidi;
    const CanalMidi = chargeDto.CanalMidi;
    const chansonfound = await this.chansonRepository.findOneBy({
      CanalMidi,
      PgmMidi,
    });

    if (!chansonfound) {
      throw new NotFoundException(
        `désolé nous n'avons Pas de chanson, sur cette commande Midi`,
      );
    }
    return chansonfound;
  }

  async findAll(): Promise<Chanson[]> {
    return await this.chansonRepository.find();
    // Cette action renvoi l'ensemble des chansons;
  }

  async findOne(idValue: number): Promise<Chanson> {
    const chansonfound = await this.chansonRepository.findOneBy({
      id: idValue,
    });
    if (!chansonfound) {
      throw new NotFoundException(
        `Désolé, nous n'avons pas trouvé de chanson avec l'id ${idValue}`,
      );
    }
    return chansonfound;
    // Cette action permet de renvoyer une chanson par son id;
  }

  async update(
    id: number,
    updateChansonDto: UpdateChansonDto,
  ): Promise<Chanson> {
    const upChanson = await this.findOne(id);
    upChanson.Titre = updateChansonDto.Titre;
    // upChanson.Auteur = updateChansonDto.Auteur;
    // upChanson.Tonalité = updateChansonDto.Tonalité;
    // upChanson.Tempo = updateChansonDto.Tempo;
    // upChanson.Durée = updateChansonDto.Durée;
    // upChanson.TimeSignature = updateChansonDto.TimeSignature;
    // upChanson.Image = updateChansonDto.Image;
    upChanson.CanalMidi = updateChansonDto.CanalMidi;
    upChanson.PgmMidi = updateChansonDto.PgmMidi;

    return await this.chansonRepository.save(upChanson);
    // Cette action permet de modifier une chanson par son id;
  }

  async remove(id: number): Promise<string> {
    const Result = await this.chansonRepository.delete({ id });
    if (Result.affected === 0) {
      throw new NotFoundException(
        `Suppression impossible, car il n'y a pas de chanson avec l'id ${id}`,
      );
    }
    return `Bravo: La chanson avec l'id ${id} a bien été supprimée...`;
  }
  // Cette action permet de supprimer une chanson par son id;
}
