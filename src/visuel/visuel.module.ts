import { Module } from '@nestjs/common';
import { VisuelsService } from './visuel.service';
import { VisuelController } from './visuel.controller';
import { Visuel } from './entities/visuel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Visuel])],
  controllers: [VisuelController],
  providers: [VisuelsService],
})
export class VisuelModule {}
