import { Module } from '@nestjs/common';
import { CommandeMidiService } from './commande-midi.service';
import { CommandeMidiController } from './commande-midi.controller';
import { CommandeMidi } from './entities/commande-midi.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CommandeMidi])],
  controllers: [CommandeMidiController],
  providers: [CommandeMidiService],
})
export class CommandeMidiModule {}
