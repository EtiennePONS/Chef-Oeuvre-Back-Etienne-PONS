import { Visuel } from 'src/visuel/entities/visuel.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Notes-Midi' })
export class NoteMidi {
  @PrimaryGeneratedColumn()
  id?: number;

  // @Column({ nullable: false })
  // NoteNumber: number;

  // @Column({ nullable: true })
  // Vélocité: number;

  @Column({ nullable: false })
  NoteString: string;

  // @OneToMany(() => Chanson, (chanson) => chanson.noteMidi)
  // chanson: Chanson[];

  @OneToMany(() => Visuel, (visuel) => visuel.noteMidi)
  visuel: Visuel[];

  // @ManyToMany(() => CommandeMidi, (commandeMidi) => commandeMidi.noteMidi, {
  //   nullable: true,
  //   eager: true,
  // })
  // @JoinTable()
  // commandeMidi: CommandeMidi[];
}
