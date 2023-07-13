import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LocationRoutingModule } from './location-routing.module';
import { ProvinceListComponent } from './province-list/province-list.component';

import { MatTableModule } from '@angular/material/table';
import { FavLocationsComponent } from './fav-locations/fav-locations.component';
import { SearchComponent } from './search/search.component';
import { PopularLocationsComponent } from './popular-locations/popular-locations.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule }from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
@NgModule({
  declarations: [
    ProvinceListComponent,
    FavLocationsComponent,
    SearchComponent,
    PopularLocationsComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatChipsModule,
    MatExpansionModule,
    MatGridListModule
  ]
})
export class LocationModule { }
