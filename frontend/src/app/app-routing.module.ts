import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherModule } from './weather/weather.module';
import { UsersModule } from './users/users.module';

const routes: Routes = [
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then(m => m.LocationModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then(m =>WeatherModule)
  },
  {
    path: 'recommendations',
    loadChildren: () => import('./recommendations/recommendations.module').then(m =>m.RecommendationsModule)
  },
  {
    path: '',
    redirectTo: 'location',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'location',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
