/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateChansonDto } from './create-chanson.dto';

export class ChargeDto extends PartialType(CreateChansonDto) {
  // Titre: string;
  // Auteur: string;
  // Tonalité: string;
  // Tempo: string;
  // Durée: number;
  // TimeSignature: string;
  // Image: string;
  CanalMidi: number;
  PgmMidi: number;
}
