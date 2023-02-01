import { AssNoteCommande } from 'src/ass-note-commande/entities/ass-note-commande.entity';
import { Entity, OneToMany } from 'typeorm';

@Entity()
export class CommandeMidi {
  @OneToMany(
    () => AssNoteCommande,
    (assNoteCommande) => assNoteCommande.commandeMidi,
  )
  assNoteCommande: AssNoteCommande;
}
