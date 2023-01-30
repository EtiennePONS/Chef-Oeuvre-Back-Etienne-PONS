import { PartialType } from '@nestjs/mapped-types';
import { CreateAssNoteCommandeDto } from './create-ass-note-commande.dto';

export class UpdateAssNoteCommandeDto extends PartialType(CreateAssNoteCommandeDto) {}
