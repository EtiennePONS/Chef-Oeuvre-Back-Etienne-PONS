import { Test, TestingModule } from '@nestjs/testing';
import { AssNoteCommandeController } from './ass-note-commande.controller';
import { AssNoteCommandeService } from './ass-note-commande.service';

describe('AssNoteCommandeController', () => {
  let controller: AssNoteCommandeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssNoteCommandeController],
      providers: [AssNoteCommandeService],
    }).compile();

    controller = module.get<AssNoteCommandeController>(AssNoteCommandeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
