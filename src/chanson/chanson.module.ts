import { Module } from '@nestjs/common';
import { ChansonService } from './chanson.service';
import { ChansonController } from './chanson.controller';
import { Chanson } from './entities/chanson.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Chanson])],
  controllers: [ChansonController],
  providers: [ChansonService],
})
export class ChansonModule {}
