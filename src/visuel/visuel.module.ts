import { Module } from '@nestjs/common';
import { VisuelService } from './visuel.service';
import { VisuelController } from './visuel.controller';
import { Visuel } from './entities/visuel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Visuel])],
  controllers: [VisuelController],
  providers: [VisuelService],
})
export class VisuelModule {}
