import { PartialType } from '@nestjs/mapped-types';
import { CreateCommandeMidiDto } from './create-commande-midi.dto';

export class UpdateCommandeMidiDto extends PartialType(CreateCommandeMidiDto) {
  CommandeMidi: number;
  Canalnumber: number;
  Canalstring: string;
}
