/* eslint-disable prettier/prettier */
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';
import { Visuel } from 'src/visuel/entities/visuel.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Chanson' })
export class Chanson {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: false, type: 'varchar', length: 150 })
  Titre: string;

  // @Column({ nullable: false, type: 'varchar', length: 50 })
  // Auteur: string;

  // @Column({ nullable: true, type: 'varchar', length: 20 })
  // Tonalité: string;

  // @Column({ nullable: false, type: 'varchar', length: 20 })
  // Tempo: string;

  // @Column({ nullable: false, type: 'varchar', length: 20 })
  // Durée: number;

  // @Column({ nullable: false, type: 'varchar', length: 20 })
  // TimeSignature: string;

  // @Column({ nullable: false, type: 'varchar', length: 100 })
  // Image: string;

  @Column({ nullable: false })
  CanalMidi: number;

  @Column({ nullable: false })
  PgmMidi: number;

  @ManyToOne(() => Utilisateur, (utilisateur) => utilisateur.chanson)
  utilisateur: Utilisateur;

  @OneToMany(() => Visuel, (visuel) => visuel.chanson)
  visuel: Visuel[];
}
