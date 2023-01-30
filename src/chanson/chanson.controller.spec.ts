import { Test, TestingModule } from '@nestjs/testing';
import { ChansonController } from './chanson.controller';
import { ChansonService } from './chanson.service';

describe('ChansonController', () => {
  let controller: ChansonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChansonController],
      providers: [ChansonService],
    }).compile();

    controller = module.get<ChansonController>(ChansonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
