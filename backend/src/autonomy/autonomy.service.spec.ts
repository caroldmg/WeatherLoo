import { Test, TestingModule } from '@nestjs/testing';
import { AutonomyService } from './autonomy.service';

describe('AutonomyService', () => {
  let service: AutonomyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutonomyService],
    }).compile();

    service = module.get<AutonomyService>(AutonomyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
