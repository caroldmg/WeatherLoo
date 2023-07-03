import { Module } from '@nestjs/common';
import { AutonomyService } from './autonomy.service';
import { AutonomyController } from './autonomy.controller';
import { Autonomy } from './autonomy.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Autonomy])],
  providers: [AutonomyService],
  controllers: [AutonomyController]
})
export class AutonomyModule {}
