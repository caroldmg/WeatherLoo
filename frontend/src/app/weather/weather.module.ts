import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { WeatherListHoursComponent } from './weather-list-hours/weather-list-hours.component';
import { WeatherListSevenDaysComponent } from './weather-list-seven-days/weather-list-seven-days.component';


@NgModule({
  declarations: [
    WeatherDetailComponent,
    WeatherListHoursComponent,
    WeatherListSevenDaysComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
