import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { LocationRoutingModule } from './location-routing.module';
import { ProvinceListComponent } from './province-list/province-list.component';

import { MatTableModule } from '@angular/material/table';
import { SearchComponent } from './search/search.component';
import { PopularLocationsComponent } from './popular-locations/popular-locations.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule }from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';

import { RecommendationsModule } from '../recommendations/recommendations.module';
import { TownListComponent } from './town-list/town-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SpinnerInterceptor } from '../shared/components/interceptors/spinner.interceptor';
import { SpinnerModule } from '../shared/components/spinner/spinner.module';
import { FavLocationsComponent } from './fav-locations/fav-locations.component';

@NgModule({
  declarations: [
    ProvinceListComponent,
    SearchComponent,
    PopularLocationsComponent,
    TownListComponent,
    FavLocationsComponent
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
    MatButtonModule,
    RecommendationsModule,
    SpinnerModule
  ],
  exports:[
    SearchComponent
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true}
  ]
})
export class LocationModule { }
