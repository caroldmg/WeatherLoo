import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { WeatherModule } from './weather/weather.module';
import { LocationModule } from './location/location.module';
import { UsersModule } from './users/users.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatGridListModule } from '@angular/material/grid-list';
import {ReactiveFormsModule,FormsModule  } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { FavLocationsComponent } from './locations/fav-locations/fav-locations.component';
import { SearchComponent } from './locations/search/search.component';
import { PopularLocationsComponent } from './locations/popular-locations/popular-locations.component';
import { RecommendationsModule } from './recommendations/recommendations.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FavLocationsComponent,
    SearchComponent,
    PopularLocationsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherModule,
    LocationModule,
    UsersModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatGridListModule,
    ReactiveFormsModule,FormsModule,
    MatStepperModule,
    RecommendationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
