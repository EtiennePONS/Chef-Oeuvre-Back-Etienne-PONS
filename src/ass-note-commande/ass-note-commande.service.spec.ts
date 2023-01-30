import { Test, TestingModule } from '@nestjs/testing';
import { AssNoteCommandeService } from './ass-note-commande.service';

describe('AssNoteCommandeService', () => {
  let service: AssNoteCommandeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssNoteCommandeService],
    }).compile();

    service = module.get<AssNoteCommandeService>(AssNoteCommandeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
