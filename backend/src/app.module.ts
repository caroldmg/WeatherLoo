import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProvincesModule } from './provinces/provinces.module';
import { TownsModule } from './towns/towns.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DatabaseModule, ProvincesModule, TownsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
