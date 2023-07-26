import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { IWeather } from '../models/weather.model';
import { ActivatedRoute } from '@angular/router';
import { ITown } from 'src/app/location/models/town.model';
import { MADRID_TOWNCODE } from 'src/app/shared/constants';
import { LocationService } from 'src/app/location/services/location.service';
import { IProvince } from 'src/app/location/models/province.model';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})

export class WeatherDetailComponent implements OnInit{

  weather: IWeather|undefined;
  municipio: ITown | undefined;
  provincia: IProvince | undefined;

  constructor(private weatherService: WeatherService,
              private activatedRoute: ActivatedRoute,
              private locationService: LocationService
              ){}


  

   ngOnInit(): void {
     this.loadWeather();
     }
    
  
   loadWeather(){    
     this.activatedRoute.params.subscribe((params) => {     
      const townCode = params['townCode'] ?? MADRID_TOWNCODE;
      console.log(townCode);
      
      // si no pones ningún valor en la url, debería dar el tiempo de MAdrid por defecto
        if (townCode){
          this.locationService.findTownByTownCode(townCode).subscribe(data =>{ 
            this.municipio = data;
            this.provincia = this.municipio?.province
          });
          
        } 
        // else {
        //   const townCode = MADRID_TOWNCODE
        // }
       this.weatherService.getWeatherRealTime(townCode).subscribe(data => this.weather = data)
   })

 }

}

