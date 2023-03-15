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
  UseGuards,
} from '@nestjs/common';
import { VisuelsService } from './visuel.service';
import { CreateVisuelDto } from './dto/create-visuel.dto';
import { UpdateVisuelDto } from './dto/update-visuel.dto';
import { ChargeVisuelDto } from './dto/charge-visuel.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateVisuelFormDataDto } from './dto/create-visuel-form-data.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';

@Controller('visuel')
export class VisuelController {
  constructor(private readonly visuelService: VisuelsService) {}

  @Post('upload')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileInterceptor('fichier'))
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() bodyTest: CreateVisuelFormDataDto,
    @GetUser() user: Utilisateur,
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
    return this.visuelService.create(createVisuelDto, user);
  }

  @Post('/charge')
  @UseGuards(AuthGuard('jwt'))
  charge(
    @Body() chargeVisuelDto: ChargeVisuelDto,
    @GetUser() user: Utilisateur,
  ) {
    return this.visuelService.charge(chargeVisuelDto, user);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(@GetUser() user: Utilisateur) {
    return this.visuelService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visuelService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id') id: string,
    @Body() updateVisuelDto: UpdateVisuelDto,
    @GetUser() user: Utilisateur,
  ) {
    return this.visuelService.update(+id, updateVisuelDto, user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string, @GetUser() user: Utilisateur) {
    return this.visuelService.remove(+id, user);
  }
}
