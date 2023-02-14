import { PartialType } from '@nestjs/mapped-types';
import { CreateVisuelDto } from './create-visuel.dto';

export class UpdateVisuelDto extends PartialType(CreateVisuelDto) {
  Visuel: string;
  Commentaire: string;
  // NoteString: string;
}
