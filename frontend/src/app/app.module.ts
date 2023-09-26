import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { WeatherModule } from './weather/weather.module';
import { LocationModule } from './location/location.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatGridListModule } from '@angular/material/grid-list';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerModule } from './shared/components/spinner/spinner.module';
import { SpinnerInterceptor } from './shared/components/interceptors/spinner.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherModule,
    LocationModule,
    UsersModule,
    AuthModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatGridListModule,
    SpinnerModule
  ],
 providers:[
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
