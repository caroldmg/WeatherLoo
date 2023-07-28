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
import { BannerComponent } from '../recommendations/banner/banner.component';

import { RecommendationsModule } from '../recommendations/recommendations.module';
import { WeatherModule } from '../weather/weather.module';
import { TownListComponent } from './town-list/town-list.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    ProvinceListComponent,
    FavLocationsComponent,
    SearchComponent,
    PopularLocationsComponent,
    TownListComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatChipsModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    RecommendationsModule,
    WeatherModule
  ],
  exports:[
    SearchComponent,
    FavLocationsComponent
  ]
})
export class LocationModule { }
