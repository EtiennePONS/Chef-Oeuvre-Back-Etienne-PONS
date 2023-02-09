import { PartialType } from '@nestjs/mapped-types';
import { CreateNoteMidiDto } from './create-note-midi.dto';

export class UpdateNoteMidiDto extends PartialType(CreateNoteMidiDto) {
  NoteNumber: number;
  Vélocité: number;
  NoteString: string;
}
