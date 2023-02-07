import { Chanson } from 'src/chanson/entities/chanson.entity';
import { NoteMidi } from 'src/note-midi/entities/note-midi.entity';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'visuels' })
export class Visuel {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: true, type: 'varchar', length: 50 })
  Visuel: string;

  @Column({ nullable: true, type: 'varchar', length: 50 })
  Commentaire: string;

  @Column({ nullable: true, type: 'varchar', length: 50 })
  NoteString: string;

  @ManyToOne(() => Utilisateur, (utilisateur) => utilisateur.visuel)
  utilisateur: Utilisateur[];

  @ManyToOne(() => Chanson, (chanson) => chanson.visuel)
  chanson: Chanson[];

  @ManyToOne(() => NoteMidi, (noteMidi) => noteMidi.visuel)
  noteMidi: NoteMidi[];
}
