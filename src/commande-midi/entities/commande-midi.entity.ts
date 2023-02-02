import { NoteMidi } from 'src/note-midi/entities/note-midi.entity';
import { Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Commandes-Midi' })
export class CommandeMidi {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToMany(() => NoteMidi, (noteMidi) => noteMidi.commandeMidi, {
    eager: false,
  })
  noteMidi: NoteMidi;
}
