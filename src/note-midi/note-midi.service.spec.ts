import { Test, TestingModule } from '@nestjs/testing';
import { NotesMidiService } from './note-midi.service';

describe('NoteMidiService', () => {
  let service: NotesMidiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesMidiService],
    }).compile();

    service = module.get<NotesMidiService>(NotesMidiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
