import { Chanson } from 'src/chanson/entities/chanson.entity';
import { Visuel } from 'src/visuel/entities/visuel.entity';
import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Musicien-Utilisateur' })
export class Utilisateur {
  @PrimaryGeneratedColumn()
  id?: number;

  @OneToMany(() => Chanson, (chanson) => chanson.utilisateur)
  chanson: Chanson[];

  @OneToMany(() => Visuel, (visuel) => visuel.utilisateur)
  visuel: Visuel[];
}
