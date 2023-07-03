import { Module } from '@nestjs/common';
import { TownsService } from './towns.service';
import { TownsController } from './towns.controller';

@Module({
  providers: [TownsService],
  controllers: [TownsController]
})
export class TownsModule {}
