import { Chanson } from 'src/chanson/entities/chanson.entity';
import { NoteMidi } from 'src/note-midi/entities/note-midi.entity';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Visuel' })
export class Visuel {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  Visuel: string;

  @Column({ nullable: false })
  CanalMidi: number;

  @Column({ nullable: false })
  PgmMidi: number;

  @Column({ nullable: false })
  NoteMidi: number;

  @Column({ nullable: false, type: 'varchar', length: 255 })
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
