import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { GetUser } from 'src/auth/get-user.decorator';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';
import { ChansonsService } from './chanson.service';
import { ChargeChansonDto } from './dto/charge-chanson.dto';
import { CreateChansonDto } from './dto/create-chanson.dto';
import { UpdateChansonDto } from './dto/update-chanson.dto';

@Controller('chanson')
export class ChansonController {
  constructor(private readonly chansonService: ChansonsService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(
    @Body() createChansonDto: CreateChansonDto,
    @GetUser() user: Utilisateur,
  ) {
    return this.chansonService.create(createChansonDto, user);
  }

  @Post('/charge')
  charge(@Body() chargeChansonDto: ChargeChansonDto, user: Utilisateur) {
    return this.chansonService.charge(chargeChansonDto, user);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(@GetUser() user: Utilisateur) {
    return this.chansonService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chansonService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id') id: string,
    @Body() updateChansonDto: UpdateChansonDto,
    @GetUser() user: Utilisateur,
  ) {
    return this.chansonService.update(+id, updateChansonDto, user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string, @GetUser() user: Utilisateur) {
    return this.chansonService.remove(+id, user);
  }
}
