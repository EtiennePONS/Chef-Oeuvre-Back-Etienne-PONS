import { Module } from '@nestjs/common';
import { CommandesMidiService } from './commande-midi.service';
import { CommandesMidiController } from './commande-midi.controller';
import { CommandeMidi } from './entities/commande-midi.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CommandeMidi])],
  controllers: [CommandesMidiController],
  providers: [CommandesMidiService],
})
export class CommandeMidiModule {}
