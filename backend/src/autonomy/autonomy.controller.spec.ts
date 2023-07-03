import { Test, TestingModule } from '@nestjs/testing';
import { AutonomyController } from './autonomy.controller';

describe('AutonomyController', () => {
  let controller: AutonomyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutonomyController],
    }).compile();

    controller = module.get<AutonomyController>(AutonomyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
