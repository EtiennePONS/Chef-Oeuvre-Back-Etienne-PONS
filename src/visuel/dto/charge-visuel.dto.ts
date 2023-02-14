/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateVisuelDto } from './create-visuel.dto';

export class ChargeVisuelDto extends PartialType(CreateVisuelDto) {
  Visuel: string;
  CanalMidi: number;
  PgmMidi: number;
  NoteMidi: number;
}
