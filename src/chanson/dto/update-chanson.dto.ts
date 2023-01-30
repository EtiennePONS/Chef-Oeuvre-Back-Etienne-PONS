import { PartialType } from '@nestjs/mapped-types';
import { CreateChansonDto } from './create-chanson.dto';

export class UpdateChansonDto extends PartialType(CreateChansonDto) {}
