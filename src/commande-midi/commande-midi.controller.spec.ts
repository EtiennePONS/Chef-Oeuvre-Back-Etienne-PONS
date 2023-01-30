import { Test, TestingModule } from '@nestjs/testing';
import { CommandeMidiController } from './commande-midi.controller';
import { CommandeMidiService } from './commande-midi.service';

describe('CommandeMidiController', () => {
  let controller: CommandeMidiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommandeMidiController],
      providers: [CommandeMidiService],
    }).compile();

    controller = module.get<CommandeMidiController>(CommandeMidiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
