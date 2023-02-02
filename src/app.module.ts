import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { ChansonModule } from './chanson/chanson.module';
import { VisuelModule } from './visuel/visuel.module';
import { NoteMidiModule } from './note-midi/note-midi.module';
import { CommandeMidiModule } from './commande-midi/commande-midi.module';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chanson } from './chanson/entities/chanson.entity';
import { Visuel } from './visuel/entities/visuel.entity';
import { Utilisateur } from './utilisateur/entities/utilisateur.entity';
import { NoteMidi } from './note-midi/entities/note-midi.entity';
import { CommandeMidi } from './commande-midi/entities/commande-midi.entity';

dotenv.config({ path: '.env' });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT || '5432'),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [Chanson, Visuel, Utilisateur, NoteMidi, CommandeMidi],
      // synchronize: true,
      synchronize: process.env.POSTGRES_NODE === 'DEV' ? true : false,
    }),
    UtilisateurModule,
    ChansonModule,
    VisuelModule,
    NoteMidiModule,
    CommandeMidiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
