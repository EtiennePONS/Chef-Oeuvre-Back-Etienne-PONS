import { Visuel } from 'src/visuel/entities/visuel.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Note-Midi' })
export class NoteMidi {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: false, type: 'varchar', length: 4 })
  NoteString: string;

  @OneToMany(() => Visuel, (visuel) => visuel.noteMidi)
  visuel: Visuel[];
}
