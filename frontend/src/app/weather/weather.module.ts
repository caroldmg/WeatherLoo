import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { WeatherListHoursComponent } from './weather-list-hours/weather-list-hours.component';
import { WeatherListSevenDaysComponent } from './weather-list-seven-days/weather-list-seven-days.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { RecommendationsModule } from '../recommendations/recommendations.module';
import { SpinnerModule } from '../shared/components/spinner/spinner.module';
import { SpinnerInterceptor } from '../shared/components/interceptors/spinner.interceptor';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


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
    MatButtonModule,
    MatIconModule,
    RecommendationsModule,
    SpinnerModule
  ],
  exports: [
    WeatherDetailComponent
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true}
  ]
})
export class WeatherModule { }
