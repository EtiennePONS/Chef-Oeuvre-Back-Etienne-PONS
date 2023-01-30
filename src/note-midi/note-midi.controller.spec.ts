import { Test, TestingModule } from '@nestjs/testing';
import { NoteMidiController } from './note-midi.controller';
import { NoteMidiService } from './note-midi.service';

describe('NoteMidiController', () => {
  let controller: NoteMidiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoteMidiController],
      providers: [NoteMidiService],
    }).compile();

    controller = module.get<NoteMidiController>(NoteMidiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
