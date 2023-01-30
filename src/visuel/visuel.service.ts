import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVisuelDto } from './dto/create-visuel.dto';
import { UpdateVisuelDto } from './dto/update-visuel.dto';
import { Visuel } from './entities/visuel.entity';

@Injectable()
export class VisuelService {
  constructor(
    @InjectRepository(Visuel)
    private userRepository: Repository<Visuel>,
  ) {}
  create(createVisuelDto: CreateVisuelDto) {
    return 'This action adds a new visuel';
  }

  findAll() {
    return `This action returns all visuel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} visuel`;
  }

  update(id: number, updateVisuelDto: UpdateVisuelDto) {
    return `This action updates a #${id} visuel`;
  }

  remove(id: number) {
    return `This action removes a #${id} visuel`;
  }
}
