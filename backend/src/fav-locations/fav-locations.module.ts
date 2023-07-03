import { Module } from '@nestjs/common';
import { FavLocationsService } from './fav-locations.service';
import { FavLocationsController } from './fav-locations.controller';

@Module({
  providers: [FavLocationsService],
  controllers: [FavLocationsController]
})
export class FavLocationsModule {}
