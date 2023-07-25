import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { WeatherListHoursComponent } from './weather-list-hours/weather-list-hours.component';
import { WeatherListSevenDaysComponent } from './weather-list-seven-days/weather-list-seven-days.component';

import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { RecommendationsModule } from '../recommendations/recommendations.module';


@NgModule({
  declarations: [
    WeatherDetailComponent,
    WeatherListHoursComponent,
    WeatherListSevenDaysComponent,
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    HttpClientModule,
    MatCardModule,
    RecommendationsModule
  ],
  exports: [

    WeatherDetailComponent
  ]
})
export class WeatherModule { }
