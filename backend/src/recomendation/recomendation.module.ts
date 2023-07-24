import { Module } from '@nestjs/common';
import { RecomendationController } from './recomendation.controller';
import { RecomendationService } from './recomendation.service';
import { Recommendation } from './recomendation.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Recommendation])],
  controllers: [RecomendationController],
  providers: [RecomendationService]
})
export class RecomendationModule {}
