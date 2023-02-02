import { Test, TestingModule } from '@nestjs/testing';
import { CommandesMidiService } from './commande-midi.service';

describe('CommandeMidiService', () => {
  let service: CommandesMidiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommandesMidiService],
    }).compile();

    service = module.get<CommandesMidiService>(CommandesMidiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
