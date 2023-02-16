import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/Login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Utilisateur)
    private utilisateurRepository: Repository<Utilisateur>,
    private jwtService: JwtService,
  ) {}
  async register(createAuthDto: CreateAuthDto) {
    const { Firstname, Name, Email, Password } = createAuthDto;

    // hashage du mot de passe
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(Password, salt);

    // création d'une entité utilisateur
    const utilisateur = this.utilisateurRepository.create({
      Firstname,
      Name,
      Email,
      Password: hashedPassword,
    });

    try {
      // enregistrement de l'entité user
      const createdUtilisateur = await this.utilisateurRepository.save(
        utilisateur,
      );
      delete createdUtilisateur.Password;
      return createdUtilisateur;
    } catch (error) {
      // gestion des erreurs
      if (error.code === '23505') {
        throw new ConflictException(`l'utilisateur existe déjà`);
      } else {
        throw new InternalServerErrorException(error);
      }
    }
  }
  async login(loginAuthDto: LoginAuthDto) {
    const { Email, Password } = loginAuthDto;
    const user = await this.utilisateurRepository.findOneBy({});

    if (user && (await bcrypt.compare(Password, user.Password))) {
      const payload = { Email };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken, user };
    } else {
      throw new UnauthorizedException(
        'Ces identifiants ne sont pas bons, déso...',
      );
    }
  }
}
