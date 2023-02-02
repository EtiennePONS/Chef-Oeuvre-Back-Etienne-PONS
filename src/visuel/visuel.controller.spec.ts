import { Test, TestingModule } from '@nestjs/testing';
import { VisuelController } from './visuel.controller';
import { VisuelsService } from './visuel.service';

describe('VisuelController', () => {
  let controller: VisuelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VisuelController],
      providers: [VisuelsService],
    }).compile();

    controller = module.get<VisuelController>(VisuelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
