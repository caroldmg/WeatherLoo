import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProvince } from 'src/app/location/models/province.model';
import { ITown } from 'src/app/location/models/town.model';
import { LocationService } from 'src/app/location/services/location.service';
import { MADRID_TOWNCODE } from 'src/app/shared/constants';
import { IWeather } from '../models/weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-list-hours',
  templateUrl: './weather-list-hours.component.html',
  styleUrls: ['./weather-list-hours.component.css']
})
export class WeatherListHoursComponent implements OnInit {

  weather: IWeather|undefined;
  municipio: ITown | undefined;
  provincia: IProvince | undefined;
  currentHour: number = 0;
  imgSky: string = '';

  constructor(private weatherService: WeatherService,
              private activatedRoute: ActivatedRoute,
              private locationService: LocationService
              ){}


  

   ngOnInit(): void {
     this.loadWeather();
     this.currentHour = this.getCurrentHour()
      console.log( 'hora actual: ' +this.currentHour);
      
     }
    
  
   loadWeather(){    
     this.activatedRoute.params.subscribe((params) => {     
      const townCode = params['townCode'] ?? MADRID_TOWNCODE;
      console.log(townCode);

          this.locationService.findTownByTownCode(townCode).subscribe(data =>{ 
            this.municipio = data;
            this.provincia = this.municipio?.province;
            this.weatherService.getWeatherRealTime(townCode, this.provincia?.id).subscribe(data => {
              this.weather = data
              this.imgSky = this.weather.stateSky.description.toLocaleLowerCase().replace(' ', '') ?? 'nuboso';
              
            });
          });

   })

 }

  getCurrentHour(): number{
    const currentDate = new Date();
    return currentDate.getHours() % 24;
  }
  
}
