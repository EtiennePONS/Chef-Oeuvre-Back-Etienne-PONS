import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';
import { Repository } from 'typeorm';
import { ChargeChansonDto } from './dto/charge-chanson.dto';
import { CreateChansonDto } from './dto/create-chanson.dto';
import { UpdateChansonDto } from './dto/update-chanson.dto';
import { Chanson } from './entities/chanson.entity';

@Injectable()
export class ChansonsService {
  constructor(
    @InjectRepository(Chanson)
    private chansonRepository: Repository<Chanson>,
  ) {}
  async create(createChansonDto: CreateChansonDto, user: Utilisateur) {
    // async create(createChansonDto: CreateChansonDto) {
    const chansonPersonalise = this.chansonRepository.create({
      Titre: createChansonDto.Titre,
      CanalMidi: createChansonDto.CanalMidi,
      PgmMidi: createChansonDto.PgmMidi,
      utilisateur: user,
    });
    return await this.chansonRepository.save(chansonPersonalise);
    // return await this.chansonRepository.save(createChansonDto);
    // Cette action permet de creer une nouvelle chanson;
  }

  async charge(
    chargeChansonDto: ChargeChansonDto,
    user: Utilisateur,
  ): Promise<Chanson> {
    const PgmMidi = chargeChansonDto.PgmMidi;
    const CanalMidi = chargeChansonDto.CanalMidi;
    const chansonfound = await this.chansonRepository.findOneBy({
      CanalMidi,
      PgmMidi,
      utilisateur: user,
    });

    if (!chansonfound) {
      throw new NotFoundException(
        `désolé nous n'avons Pas de chanson, sur cette commande Midi`,
      );
    }
    return chansonfound;
    // Cette action renvoi une chansons en fonction du body envoyé dans la requette;
  }

  async findAll(user: Utilisateur): Promise<Chanson[]> {
    return await this.chansonRepository.findBy({ utilisateur: user });
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
    // Cette action permet de trouver une chanson par son id;
  }

  async update(
    id: number,
    updateChansonDto: UpdateChansonDto,
    user: Utilisateur,
  ): Promise<Chanson> {
    const upChanson = await this.findOne(id);
    upChanson.Titre = updateChansonDto.Titre;
    upChanson.CanalMidi = updateChansonDto.CanalMidi;
    upChanson.PgmMidi = updateChansonDto.PgmMidi;
    upChanson.utilisateur = user;

    return await this.chansonRepository.save(upChanson);
    // Cette action permet de modifier une chanson par son id;
  }

  async remove(id: number, user: Utilisateur): Promise<string> {
    const Result = await this.chansonRepository.delete({
      id,
      utilisateur: user,
    });
    if (Result.affected === 0) {
      throw new NotFoundException(
        `Suppression impossible, car il n'y a pas de chanson avec l'id ${id}`,
      );
    }
    return `Bravo: La chanson avec l'id ${id} a bien été supprimée...`;
    // Cette action permet de supprimer une chanson par son id;
  }
}
