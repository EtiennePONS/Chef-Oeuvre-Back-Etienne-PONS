import { Test, TestingModule } from '@nestjs/testing';
import { VisuelService } from './visuel.service';

describe('VisuelService', () => {
  let service: VisuelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VisuelService],
    }).compile();

    service = module.get<VisuelService>(VisuelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
