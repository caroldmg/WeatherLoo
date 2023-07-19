import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { IWeather } from '../models/weather.model';
import { ActivatedRoute } from '@angular/router';
import { ITown } from 'src/app/location/models/town.model';
import { MADRID_TOWNCODE } from 'src/app/shared/constants';
import { LocationService } from 'src/app/location/services/location.service';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})

export class WeatherDetailComponent implements OnInit{

  weather: IWeather|undefined;
  municipio: ITown | undefined;

  constructor(private weatherService: WeatherService,
              private activatedRoute: ActivatedRoute,
              private locationService: LocationService
              ){}


  

   ngOnInit(): void {
     this.loadWeather();
   
     }
    
  
   loadWeather(){    
     this.activatedRoute.params.subscribe((params) => {     
      const townCode = params['townCode']
      // si no pones ningún valor en la url, debería dar el tiempo de MAdrid por defecto
      // const townCode = MADRID_TOWNCODE
        if (townCode){
          this.locationService.findTownByTownCode(townCode).subscribe(data => this.municipio = data);
        }
       this.weatherService.getWeatherRealTime(townCode).subscribe(data => this.weather = data)
   })

 }

}

