import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChansonDto } from './dto/create-chanson.dto';
import { UpdateChansonDto } from './dto/update-chanson.dto';
import { Chanson } from './entities/chanson.entity';

@Injectable()
export class ChansonService {
  constructor(
    @InjectRepository(Chanson)
    private userRepository: Repository<Chanson>,
  ) {}
  create(createChansonDto: CreateChansonDto) {
    return 'This action adds a new chanson';
  }

  findAll() {
    return `This action returns all chanson`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chanson`;
  }

  update(id: number, updateChansonDto: UpdateChansonDto) {
    return `This action updates a #${id} chanson`;
  }

  remove(id: number) {
    return `This action removes a #${id} chanson`;
  }
}
