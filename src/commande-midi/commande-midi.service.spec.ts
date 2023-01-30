import { Test, TestingModule } from '@nestjs/testing';
import { CommandeMidiService } from './commande-midi.service';

describe('CommandeMidiService', () => {
  let service: CommandeMidiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommandeMidiService],
    }).compile();

    service = module.get<CommandeMidiService>(CommandeMidiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
