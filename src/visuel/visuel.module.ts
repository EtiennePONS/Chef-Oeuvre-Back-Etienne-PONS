import { Module } from '@nestjs/common';
import { VisuelsService } from './visuel.service';
import { VisuelController } from './visuel.controller';
import { Visuel } from './entities/visuel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forFeature([Visuel]),
    MulterModule.register({
      dest: './files',
    }),
  ],
  controllers: [VisuelController],
  providers: [VisuelsService],
})
export class VisuelModule {}
