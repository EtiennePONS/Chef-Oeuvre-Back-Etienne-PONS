/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';
import { Repository } from 'typeorm';
import { ChargeVisuelDto } from './dto/charge-visuel.dto';
import { CreateVisuelDto } from './dto/create-visuel.dto';
import { UpdateVisuelDto } from './dto/update-visuel.dto';
import { Visuel } from './entities/visuel.entity';

@Injectable()
export class VisuelsService {
  constructor(
    @InjectRepository(Visuel)
    private visuelRepository: Repository<Visuel>,
  ) {}
  async create(
    createVisuelDto: CreateVisuelDto,
    user: Utilisateur,
  ): Promise<Visuel> {
    const visuelPersonnalise = this.visuelRepository.create({
      Visuel: createVisuelDto.Visuel,
      CanalMidi: createVisuelDto.CanalMidi,
      PgmMidi: createVisuelDto.PgmMidi,
      NoteMidi: createVisuelDto.NoteMidi,
      chanson: createVisuelDto.chanson,
      noteMidi: createVisuelDto.noteMidi,
      Image: createVisuelDto.Image,
      utilisateur: user,
    });
    return await this.visuelRepository.save(visuelPersonnalise);
    // Cette action permet de creer un nouveau visuel;
  }

  async charge(
    chargeVisuelDto: ChargeVisuelDto,
    user: Utilisateur,
  ): Promise<Visuel> {
    const CanalMidi = chargeVisuelDto.CanalMidi;
    const PgmMidi = chargeVisuelDto.PgmMidi;
    const NoteMidi = chargeVisuelDto.NoteMidi;

    const visuelfound = await this.visuelRepository.findOneBy({
      CanalMidi,
      PgmMidi,
      NoteMidi,
      utilisateur: user,
    });

    if (!visuelfound) {
      throw new NotFoundException(
        `désolé nous n'avons Pas de chanson, sur cette commande Midi`,
      );
    }
    return visuelfound;
    // Cette action renvoi d'un visuel en fonction du body envoyé dans la requette;
  }

  async findAll(user: Utilisateur): Promise<Visuel[]> {
    return await this.visuelRepository.findBy({
      utilisateur: user,
    });
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

  async update(
    id: number,
    updateVisuelDto: UpdateVisuelDto,
    user: Utilisateur,
  ): Promise<Visuel> {
    const upVisuel = await this.findOne(id);
    upVisuel.Visuel = updateVisuelDto.Visuel;
    upVisuel.CanalMidi = updateVisuelDto.CanalMidi;
    upVisuel.PgmMidi = updateVisuelDto.PgmMidi;
    upVisuel.NoteMidi = updateVisuelDto.NoteMidi;
    upVisuel.chanson = updateVisuelDto.chanson;
    upVisuel.noteMidi = updateVisuelDto.noteMidi;
    upVisuel.utilisateur = user;
    return await this.visuelRepository.save(upVisuel);

    // Cette action permet de modifier un visuel par son id;
  }

  async remove(id: number, user: Utilisateur): Promise<string> {
    const Result = await this.visuelRepository.delete({
      id,
      utilisateur: user,
    });
    if (Result.affected === 0) {
      throw new NotFoundException(
        `Suppression impossible, car il n'y a pas de visuel avec l'id ${id}`,
      );
    }
    return `Bravo: Le visuel avec l'id ${id} a bien été supprimé...`;
    // Cette action permet de supprimer un visuel par son id;
  }
}
