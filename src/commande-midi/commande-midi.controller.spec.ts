import { Test, TestingModule } from '@nestjs/testing';
import { CommandesMidiController } from './commande-midi.controller';
import { CommandesMidiService } from './commande-midi.service';

describe('CommandeMidiController', () => {
  let controller: CommandesMidiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommandesMidiController],
      providers: [CommandesMidiService],
    }).compile();

    controller = module.get<CommandesMidiController>(CommandesMidiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
