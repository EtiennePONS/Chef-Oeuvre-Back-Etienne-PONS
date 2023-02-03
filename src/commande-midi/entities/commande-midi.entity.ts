import { NoteMidi } from 'src/note-midi/entities/note-midi.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Commandes-Midi' })
export class CommandeMidi {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: false })
  CommandeMidi: number;

  @Column({ nullable: false })
  CanalMidi: number;

  @ManyToMany(() => NoteMidi, (noteMidi) => noteMidi.commandeMidi, {
    eager: false,
  })
  noteMidi: NoteMidi[];
}
