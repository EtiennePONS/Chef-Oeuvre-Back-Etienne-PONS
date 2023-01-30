import { Test, TestingModule } from '@nestjs/testing';
import { NoteMidiService } from './note-midi.service';

describe('NoteMidiService', () => {
  let service: NoteMidiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoteMidiService],
    }).compile();

    service = module.get<NoteMidiService>(NoteMidiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
