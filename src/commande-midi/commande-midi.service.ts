import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommandeMidiDto } from './dto/create-commande-midi.dto';
import { UpdateCommandeMidiDto } from './dto/update-commande-midi.dto';
import { CommandeMidi } from './entities/commande-midi.entity';

@Injectable()
export class CommandeMidiService {
  constructor(
    @InjectRepository(CommandeMidi)
    private userRepository: Repository<CommandeMidi>,
  ) {}
  create(createCommandeMidiDto: CreateCommandeMidiDto) {
    return 'This action adds a new commandeMidi';
  }

  findAll() {
    return `This action returns all commandeMidi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commandeMidi`;
  }

  update(id: number, updateCommandeMidiDto: UpdateCommandeMidiDto) {
    return `This action updates a #${id} commandeMidi`;
  }

  remove(id: number) {
    return `This action removes a #${id} commandeMidi`;
  }
}
