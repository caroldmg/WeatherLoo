import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvinceListComponent } from './province-list/province-list.component';
import { PopularLocationsComponent } from './popular-locations/popular-locations.component';
import { FavLocationsComponent } from './fav-locations/fav-locations.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: 'provinces',
    component: ProvinceListComponent
  },
  {
    path: 'provinces/:autonomyId',
    component: ProvinceListComponent
  },
  {
    path: 'provinces/:name',
    component: ProvinceListComponent
  },
  {
    path: 'popular-location',
    component: PopularLocationsComponent
  },
  // Revisar si hacen falta estas rutas
  {
    path: 'fav-locations',
    component: FavLocationsComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'search/:provinceId',
    component: SearchComponent
  },
  {
    path: '', redirectTo: 'provinces', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'provinces', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
