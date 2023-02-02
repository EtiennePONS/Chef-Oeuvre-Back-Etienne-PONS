import { Module } from '@nestjs/common';
import { ChansonsService } from './chanson.service';
import { ChansonController } from './chanson.controller';
import { Chanson } from './entities/chanson.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Chanson])],
  controllers: [ChansonController],
  providers: [ChansonsService],
})
export class ChansonModule {}
