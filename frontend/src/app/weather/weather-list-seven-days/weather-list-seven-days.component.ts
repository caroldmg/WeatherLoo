import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { IWeather } from '../models/weather.model';
import { ActivatedRoute } from '@angular/router';
import { ITown } from 'src/app/location/models/town.model';
import { MADRID_TOWNCODE } from 'src/app/shared/constants';
import { LocationService } from 'src/app/location/services/location.service';
import { IProvince } from 'src/app/location/models/province.model';

@Component({
  selector: 'app-weather-list-seven-days',
  templateUrl: './weather-list-seven-days.component.html',
  styleUrls: ['./weather-list-seven-days.component.css']
})
export class WeatherListSevenDaysComponent implements OnInit {

  weather: IWeather|undefined;
  municipio: ITown | undefined;
  provincia: IProvince | undefined;
  imgSky: string = "";

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
      // si no pones ningún valor en la url, debería dar el tiempo de Madrid por defecto
      // const townCode = MADRID_TOWNCODE
        if (townCode){
          this.locationService.findTownByTownCode(townCode).subscribe(data =>{ 
            this.municipio = data;
            this.provincia = this.municipio?.province
          });
          
        }
       this.weatherService.getWeatherRealTime(townCode).subscribe(data =>{ 
        this.weather = data;
        //this.imgSky = this.weather.proximos_dias[1].estado_cielo_descripcion[1].toLocaleLowerCase().replace(' ', '') ?? 'nuboso';

        
      })
   })

 }
}
