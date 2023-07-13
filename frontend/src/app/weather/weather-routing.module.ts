import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';

const routes: Routes = [
  {
    path: 'weather-detail/:townCode',
    component: WeatherDetailComponent
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
