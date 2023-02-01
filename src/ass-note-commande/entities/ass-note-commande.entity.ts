import { CommandeMidi } from 'src/commande-midi/entities/commande-midi.entity';
import { NoteMidi } from 'src/note-midi/entities/note-midi.entity';
import { Entity, ManyToOne } from 'typeorm';

@Entity()
export class AssNoteCommande {
  @ManyToOne(() => NoteMidi, (noteMidi) => noteMidi.assNoteCommande)
  noteMidi: NoteMidi;

  @ManyToOne(() => CommandeMidi, (commandeMidi) => commandeMidi.assNoteCommande)
  commandMidi: CommandeMidi;
}
