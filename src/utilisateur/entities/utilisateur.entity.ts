import { Chanson } from 'src/chanson/entities/chanson.entity';
import { Visuel } from 'src/visuel/entities/visuel.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'musicienUtilisateur' })
export class Utilisateur {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: true, type: 'varchar', length: 50 })
  Firstname: string;

  @Column({ nullable: false, type: 'varchar', length: 50 })
  Name: string;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  Email: string;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  Password: string;

  @OneToMany(() => Chanson, (chanson) => chanson.utilisateur)
  chanson: Chanson[];

  @OneToMany(() => Visuel, (visuel) => visuel.utilisateur)
  visuel: Visuel[];
}
