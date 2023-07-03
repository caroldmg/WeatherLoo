import { Module } from '@nestjs/common';
import { LocalWeatherController } from './local-weather.controller';
import { LocalWeatherService } from './local-weather.service';

@Module({
  controllers: [LocalWeatherController],
  providers: [LocalWeatherService]
})
export class LocalWeatherModule {}
