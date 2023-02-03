import { PartialType } from '@nestjs/mapped-types';
import { CreateUtilisateurDto } from './create-utilisateur.dto';

export class UpdateUtilisateurDto extends PartialType(CreateUtilisateurDto) {
  Firstname: string;
  Name: string;
  Email: string;
  Password: string;
}
