import { Test, TestingModule } from '@nestjs/testing';
import { LocalWeatherService } from './local-weather.service';

describe('LocalWeatherService', () => {
  let service: LocalWeatherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalWeatherService],
    }).compile();

    service = module.get<LocalWeatherService>(LocalWeatherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
