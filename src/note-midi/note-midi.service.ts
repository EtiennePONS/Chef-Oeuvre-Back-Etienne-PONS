import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoteMidiDto } from './dto/create-note-midi.dto';
import { UpdateNoteMidiDto } from './dto/update-note-midi.dto';
import { NoteMidi } from './entities/note-midi.entity';

@Injectable()
export class NoteMidiService {
  constructor(
    @InjectRepository(NoteMidi)
    private userRepository: Repository<NoteMidi>,
  ) {}
  create(createNoteMidiDto: CreateNoteMidiDto) {
    return 'This action adds a new noteMidi';
  }

  findAll() {
    return `This action returns all noteMidi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} noteMidi`;
  }

  update(id: number, updateNoteMidiDto: UpdateNoteMidiDto) {
    return `This action updates a #${id} noteMidi`;
  }

  remove(id: number) {
    return `This action removes a #${id} noteMidi`;
  }
}
