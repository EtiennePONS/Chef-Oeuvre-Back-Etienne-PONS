import { Test, TestingModule } from '@nestjs/testing';
import { ChansonService } from './chanson.service';

describe('ChansonService', () => {
  let service: ChansonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChansonService],
    }).compile();

    service = module.get<ChansonService>(ChansonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
