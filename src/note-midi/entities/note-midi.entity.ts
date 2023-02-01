import { AssNoteCommande } from 'src/ass-note-commande/entities/ass-note-commande.entity';
import { Chanson } from 'src/chanson/entities/chanson.entity';
import { Visuel } from 'src/visuel/entities/visuel.entity';
import { Entity, OneToMany } from 'typeorm';

@Entity()
export class NoteMidi {
  @OneToMany(() => Chanson, (chanson) => chanson.noteMidi)
  chanson: Chanson;

  @OneToMany(() => Visuel, (visuel) => visuel.noteMidi)
  visuel: Visuel;

  @OneToMany(
    () => AssNoteCommande,
    (assNoteCommande) => assNoteCommande.noteMidi,
  )
  assNoteCommande: AssNoteCommande;
}
