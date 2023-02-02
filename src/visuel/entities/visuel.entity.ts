import { Chanson } from 'src/chanson/entities/chanson.entity';
import { NoteMidi } from 'src/note-midi/entities/note-midi.entity';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Visuels' })
export class Visuel {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Utilisateur, (utilisateur) => utilisateur.visuel)
  utilisateur: Utilisateur;

  @ManyToOne(() => Chanson, (chanson) => chanson.visuel)
  chanson: Chanson;

  @ManyToOne(() => NoteMidi, (noteMidi) => noteMidi.visuel)
  noteMidi: NoteMidi;
}
