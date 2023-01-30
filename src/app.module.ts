import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { ChansonModule } from './chanson/chanson.module';
import { VisuelModule } from './visuel/visuel.module';
import { NoteMidiModule } from './note-midi/note-midi.module';
import { AssNoteCommandeModule } from './ass-note-commande/ass-note-commande.module';
import { CommandeMidiModule } from './commande-midi/commande-midi.module';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

@Module({
  imports: [
    UtilisateurModule,
    ChansonModule,
    VisuelModule,
    NoteMidiModule,
    AssNoteCommandeModule,
    CommandeMidiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
