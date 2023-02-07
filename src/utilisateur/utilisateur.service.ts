import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { Utilisateur } from './entities/utilisateur.entity';

@Injectable()
export class UtilisateursService {
  constructor(
    @InjectRepository(Utilisateur)
    private utilisateurrepository: Repository<Utilisateur>,
  ) {}
  async create(createUtilisateurDto: CreateUtilisateurDto) {
    return await this.utilisateurrepository.save(createUtilisateurDto);
    // Cette action permet de creer un nouvel utilisateur;
  }

  async findAll(): Promise<Utilisateur[]> {
    return await this.utilisateurrepository.find();
    // Cette action renvoi l'ensemble des utilisateurs;
  }

  async findOne(idValue: number): Promise<Utilisateur> {
    const utilisateurfound = await this.utilisateurrepository.findOneBy({
      id: idValue,
    });
    if (!utilisateurfound) {
      throw new NotFoundException(
        `Désolé, nous n'avons pas trouvé d'utilisateur' avec l'id ${idValue}`,
      );
    }
    return utilisateurfound;
    // Cette action permet de renvoyer un utilisateur par son id;
  }

  async update(
    id: number,
    updateUtilisateurDto: UpdateUtilisateurDto,
  ): Promise<Utilisateur> {
    const upUtilisateur = await this.findOne(id);
    upUtilisateur.Firstname = updateUtilisateurDto.Firstname;
    upUtilisateur.Name = updateUtilisateurDto.Name;
    upUtilisateur.Email = updateUtilisateurDto.Email;
    upUtilisateur.Password = updateUtilisateurDto.Password;
    return await this.utilisateurrepository.save(upUtilisateur);
    // Cette action permet de modifier un utilisateur par son id;
  }

  async remove(id: number): Promise<string> {
    const Result = await this.utilisateurrepository.delete({ id });
    if (Result.affected === 0) {
      throw new NotFoundException(
        `Suppression impossible, car il n'y a pas d'utilisateur avec l'id ${id}`,
      );
    }
    return `Bravo: L'utilisateur avec l'id ${id} a bien été supprimé...`;
  }
  // Cette action permet de supprimer un utilisateur par son id;
}
