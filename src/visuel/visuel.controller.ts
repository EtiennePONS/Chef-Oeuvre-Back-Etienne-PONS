import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { VisuelsService } from './visuel.service';
import { CreateVisuelDto } from './dto/create-visuel.dto';
import { UpdateVisuelDto } from './dto/update-visuel.dto';
import { ChargeVisuelDto } from './dto/charge-visuel.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateVisuelFormDataDto } from './dto/create-visuel-form-data.dto';

@Controller('visuel')
export class VisuelController {
  constructor(private readonly visuelService: VisuelsService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('fichier'))
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() bodyTest: CreateVisuelFormDataDto,
  ) {
    console.log(file);
    console.log(bodyTest);
    const createVisuelDto: CreateVisuelDto = {
      Visuel: bodyTest.Visuel,
      CanalMidi: JSON.parse(bodyTest.CanalMidi),
      PgmMidi: JSON.parse(bodyTest.PgmMidi),
      NoteMidi: JSON.parse(bodyTest.NoteMidi),
      chanson: JSON.parse(bodyTest.chanson),
      noteMidi: JSON.parse(bodyTest.noteMidi),
      Image: file.filename,
    };
    return this.visuelService.create(createVisuelDto);
  }

  @Post('/charge')
  charge(@Body() chargeVisuelDto: ChargeVisuelDto) {
    return this.visuelService.charge(chargeVisuelDto);
  }

  @Get()
  findAll() {
    return this.visuelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visuelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVisuelDto: UpdateVisuelDto) {
    return this.visuelService.update(+id, updateVisuelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.visuelService.remove(+id);
  }
}
