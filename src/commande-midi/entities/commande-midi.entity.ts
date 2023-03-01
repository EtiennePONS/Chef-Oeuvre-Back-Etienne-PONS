/* eslint-disable prettier/prettier */
import { NoteMidi } from 'src/note-midi/entities/note-midi.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Commandes-Midi' })
export class CommandeMidi {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: false })
  CommandeMidi: number;

  @Column({ nullable: false })
  Canalstring: string;

  // @ManyToMany(() => NoteMidi, (noteMidi) => noteMidi.commandeMidi, {
  //   eager: false,
  // })
  // noteMidi: NoteMidi[];
}
