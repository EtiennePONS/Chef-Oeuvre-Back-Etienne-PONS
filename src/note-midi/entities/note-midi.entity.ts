import { Visuel } from 'src/visuel/entities/visuel.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Notes-Midi' })
export class NoteMidi {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: false })
  NoteString: string;

  @OneToMany(() => Visuel, (visuel) => visuel.noteMidi)
  visuel: Visuel[];
}
