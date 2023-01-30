import { Module } from '@nestjs/common';
import { AssNoteCommandeService } from './ass-note-commande.service';
import { AssNoteCommandeController } from './ass-note-commande.controller';
import { AssNoteCommande } from './entities/ass-note-commande.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AssNoteCommande])],
  controllers: [AssNoteCommandeController],
  providers: [AssNoteCommandeService],
})
export class AssNoteCommandeModule {}
