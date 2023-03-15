import { Chanson } from 'src/chanson/entities/chanson.entity';
import { NoteMidi } from 'src/note-midi/entities/note-midi.entity';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Visuels' })
export class Visuel {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: true, type: 'varchar', length: 100 })
  Visuel: string;

  @Column()
  CanalMidi: number;

  @Column()
  PgmMidi: number;

  @Column()
  NoteMidi: number;

  @Column({ nullable: true })
  Image: string;

  @ManyToOne(() => Utilisateur, (utilisateur) => utilisateur.visuel)
  utilisateur: Utilisateur;

  @ManyToOne(() => Chanson, (chanson) => chanson.visuel, {
    nullable: false,
    eager: true,
  })
  chanson: Chanson;

  @ManyToOne(() => NoteMidi, (noteMidi) => noteMidi.visuel, {
    nullable: false,
    eager: true,
  })
  noteMidi: NoteMidi;
}
