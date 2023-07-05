import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { IWeather } from '../models/weather.model';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})

export class WeatherDetailComponent implements OnInit{

  weather: IWeather|undefined;

  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
    this.weatherService.getWeatherRealTime("01001").subscribe(data => {
      this.weather?.temperatura_actual = data.temperatura_actual
      console.log(this.weather);
      
    })
  }


}
