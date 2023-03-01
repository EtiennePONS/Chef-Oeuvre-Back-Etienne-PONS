import { Chanson } from 'src/chanson/entities/chanson.entity';
import { NoteMidi } from 'src/note-midi/entities/note-midi.entity';

/* eslint-disable prettier/prettier */
export class CreateVisuelDto {
  Visuel: string;
  CanalMidi: number;
  PgmMidi: number;
  NoteMidi: number;
  chanson: Chanson;
  noteMidi: NoteMidi;
}
