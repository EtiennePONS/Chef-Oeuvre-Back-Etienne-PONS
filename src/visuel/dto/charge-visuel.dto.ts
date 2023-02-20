/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { ChargeChansonDto } from 'src/chanson/dto/charge-chanson.dto';

export class ChargeVisuelDto extends PartialType(ChargeChansonDto) {
  Visuel: string;
  NoteMidi: number;
  Chanson:{
  CanalMidi: number;
  PgmMidi: number;
}
}
