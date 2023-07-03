import { Test, TestingModule } from '@nestjs/testing';
import { FavLocationsController } from './fav-locations.controller';

describe('FavLocationsController', () => {
  let controller: FavLocationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavLocationsController],
    }).compile();

    controller = module.get<FavLocationsController>(FavLocationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
