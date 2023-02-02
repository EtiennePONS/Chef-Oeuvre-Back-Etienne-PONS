import { NoteMidi } from 'src/note-midi/entities/note-midi.entity';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';
import { Visuel } from 'src/visuel/entities/visuel.entity';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Chansons' })
export class Chanson {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Utilisateur, (utilisateur) => utilisateur.chanson)
  utilisateur: Utilisateur;

  @OneToMany(() => Visuel, (visuel) => visuel.chanson)
  visuel: Visuel;

  @ManyToOne(() => NoteMidi, (NoteMidi) => NoteMidi.chanson)
  noteMidi: NoteMidi;
}
