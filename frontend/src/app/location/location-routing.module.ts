import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvinceGalleryComponent } from './province-gallery/province-gallery.component';
import { ProvinceListComponent } from './province-list/province-list.component';
import { TownListComponent } from './town-list/town-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProvinceGalleryComponent
  },
  {
    path: 'list',
    component: ProvinceListComponent
  },
  {
    path: 'town-list',
    component: TownListComponent
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
