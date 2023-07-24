import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProvincesModule } from './provinces/provinces.module';
import { TownsModule } from './towns/towns.module';
import { UsersModule } from './users/users.module';
import { RecomendationModule } from './recomendation/recomendation.module';
import { AutonomyModule } from './autonomy/autonomy.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, ProvincesModule, TownsModule, UsersModule,  RecomendationModule, AutonomyModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
