import { Chanson } from 'src/chanson/entities/chanson.entity';
import { NoteMidi } from 'src/note-midi/entities/note-midi.entity';

export class UpdateVisuelDto {
  Visuel: string;
  CanalMidi: number;
  PgmMidi: number;
  NoteMidi: number;
  chanson: Chanson;
  noteMidi: NoteMidi;
}
