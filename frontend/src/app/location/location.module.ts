import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LocationRoutingModule } from './location-routing.module';
import { ProvinceListComponent } from './province-list/province-list.component';
import { ProvinceGalleryComponent } from './province-gallery/province-gallery.component';
import { TownListComponent } from './town-list/town-list.component';

import { MatTableModule } from '@angular/material/table';
import { FavLocationsComponent } from './fav-locations/fav-locations.component';
import { SearchComponent } from './search/search.component';
import { PopularLocationsComponent } from './popular-locations/popular-locations.component';

@NgModule({
  declarations: [
    ProvinceListComponent,
    ProvinceGalleryComponent,
    TownListComponent,
    FavLocationsComponent,
    SearchComponent,
    PopularLocationsComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    HttpClientModule,
    MatTableModule
  ]
})
export class LocationModule { }
