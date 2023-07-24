import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { WeatherListHoursComponent } from './weather-list-hours/weather-list-hours.component';
import { WeatherListSevenDaysComponent } from './weather-list-seven-days/weather-list-seven-days.component';

const routes: Routes = [
  {
    path: 'weather-detail/:townCode',
    component: WeatherDetailComponent
},
{
    path: 'weather-detail',
    component: WeatherDetailComponent
},
{
  path: 'weather-hours/:townCode',
  component: WeatherListHoursComponent
},
{
  path: 'weather-hours',
  component: WeatherListHoursComponent
},
{
  path: 'fiveDays/:townCode',
  component: WeatherListSevenDaysComponent
},{
  path: 'Days',
  component: WeatherListSevenDaysComponent
},

{
  path: '', redirectTo: 'weather-detail', pathMatch: 'full'
},
{
  path: '**', redirectTo: 'weather-detail', pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
