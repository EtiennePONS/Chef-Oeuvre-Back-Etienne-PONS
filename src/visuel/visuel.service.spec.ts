import { Test, TestingModule } from '@nestjs/testing';
import { VisuelsService } from './visuel.service';

describe('VisuelService', () => {
  let service: VisuelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VisuelsService],
    }).compile();

    service = module.get<VisuelsService>(VisuelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
