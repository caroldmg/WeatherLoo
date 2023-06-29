import { Test, TestingModule } from '@nestjs/testing';
import { LocalWeatherController } from './local-weather.controller';

describe('LocalWeatherController', () => {
  let controller: LocalWeatherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocalWeatherController],
    }).compile();

    controller = module.get<LocalWeatherController>(LocalWeatherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
