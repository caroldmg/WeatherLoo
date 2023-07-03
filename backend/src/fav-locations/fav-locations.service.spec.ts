import { Test, TestingModule } from '@nestjs/testing';
import { FavLocationsService } from './fav-locations.service';

describe('FavLocationsService', () => {
  let service: FavLocationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavLocationsService],
    }).compile();

    service = module.get<FavLocationsService>(FavLocationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
