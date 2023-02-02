import { Chanson } from 'src/chanson/entities/chanson.entity';
import { CommandeMidi } from 'src/commande-midi/entities/commande-midi.entity';
import { Visuel } from 'src/visuel/entities/visuel.entity';
import { Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Notes-Midi' })
export class NoteMidi {
  @PrimaryGeneratedColumn()
  id?: number;

  @OneToMany(() => Chanson, (chanson) => chanson.noteMidi)
  chanson: Chanson;

  @OneToMany(() => Visuel, (visuel) => visuel.noteMidi)
  visuel: Visuel;

  @ManyToMany(() => CommandeMidi, (commandeMidi) => commandeMidi.noteMidi, {
    eager: true,
  })
  commandeMidi: CommandeMidi;
}
