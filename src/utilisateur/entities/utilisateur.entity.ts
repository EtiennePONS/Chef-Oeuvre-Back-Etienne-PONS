import { Chanson } from 'src/chanson/entities/chanson.entity';
import { Visuel } from 'src/visuel/entities/visuel.entity';
import { Entity, OneToMany } from 'typeorm';

@Entity()
export class Utilisateur {
  @OneToMany(() => Chanson, (chanson) => chanson.utilisateur)
  chanson: Chanson[];

  @OneToMany(() => Visuel, (visuel) => visuel.utilisateur)
  visuel: Visuel[];
}
