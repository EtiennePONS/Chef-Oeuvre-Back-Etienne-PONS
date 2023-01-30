import { Module } from '@nestjs/common';
import { NoteMidiService } from './note-midi.service';
import { NoteMidiController } from './note-midi.controller';
import { NoteMidi } from './entities/note-midi.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([NoteMidi])],
  controllers: [NoteMidiController],
  providers: [NoteMidiService],
})
export class NoteMidiModule {}
