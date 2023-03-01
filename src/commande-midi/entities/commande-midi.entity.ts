import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Commandes-Midi' })
export class CommandeMidi {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: false })
  CommandeMidi: number;

  @Column({ nullable: false })
  Canalstring: string;
}
