import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvinceListComponent } from './province-list/province-list.component';
import { PopularLocationsComponent } from './popular-locations/popular-locations.component';

const routes: Routes = [
  {
    path: 'list',
    component: ProvinceListComponent
  },
  {
    path: 'list/:autonomyId',
    component: ProvinceListComponent
  },
  {
    path: 'popular-location',
    component: PopularLocationsComponent
  },
   
  {
    path: '', redirectTo: '', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
