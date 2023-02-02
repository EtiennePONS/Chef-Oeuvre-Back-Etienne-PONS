import { Test, TestingModule } from '@nestjs/testing';
import { ChansonsService } from './chanson.service';

describe('ChansonService', () => {
  let service: ChansonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChansonsService],
    }).compile();

    service = module.get<ChansonsService>(ChansonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
