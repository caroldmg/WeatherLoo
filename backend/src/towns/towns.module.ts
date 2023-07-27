import { Module } from '@nestjs/common';
import { TownsService } from './towns.service';
import { TownsController } from './towns.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';
import { Town } from './towns.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Town])],
  providers: [TownsService],
  controllers: [TownsController],
  exports: [TownsService]
})
export class TownsModule {}
