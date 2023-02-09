import { Chanson } from 'src/chanson/entities/chanson.entity';
import { CommandeMidi } from 'src/commande-midi/entities/commande-midi.entity';
import { Visuel } from 'src/visuel/entities/visuel.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Notes-Midi' })
export class NoteMidi {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: false })
  NoteNumber: number;

  @Column({ nullable: true })
  Vélocité: number;

  @Column({ nullable: false })
  NoteString: string;

  @OneToMany(() => Chanson, (chanson) => chanson.noteMidi)
  chanson: Chanson[];

  @OneToMany(() => Visuel, (visuel) => visuel.noteMidi)
  visuel: Visuel[];

  @ManyToMany(() => CommandeMidi, (commandeMidi) => commandeMidi.noteMidi, {
    eager: true,
  })
  @JoinTable()
  commandeMidi: CommandeMidi[];
}
