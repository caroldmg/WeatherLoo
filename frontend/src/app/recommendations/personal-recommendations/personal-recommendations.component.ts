import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MADRID_TOWNCODE, MIN_LLUVIA_ESCASA, TEMP_FRIO, TEMP_CALOR } from 'src/app/shared/constants';

import { IWeather } from 'src/app/weather/models/weather.model';
import { WeatherService } from 'src/app/weather/services/weather.service';
import { RecommendationService } from '../services/recommendation.service';
import { Recommendation } from '../models/recommendation';

@Component({
  selector: 'app-personal-recommendations',
  templateUrl: './personal-recommendations.component.html',
  styleUrls: ['./personal-recommendations.component.css']
})
export class PersonalRecommendationsComponent implements OnInit {

  weather: IWeather | undefined;
  recommendationSky: Recommendation[] = [];
  recommendationRain: Recommendation[] = [];
  recommendationTemp: Recommendation[] = [];
  tempValue: string = '';
  stateSkyValue: string = '';

  constructor(
    private weatherService: WeatherService,
    private activatedRoute: ActivatedRoute,
    private recommendationService: RecommendationService
  ) { }

  ngOnInit(): void {
    this.loadWeather();
  }


  loadWeather() {
    this.activatedRoute.params.subscribe((params) => {
      const townCode = params['townCode'] ?? MADRID_TOWNCODE;
      console.log(townCode);

      this.weatherService.getWeatherRealTime(townCode).subscribe(data => {
        this.weather = data;
        this.checkWeather(this.weather.temperatura_actual, this.weather.stateSky.id, this.weather.lluvia)
      })
    })

  }

  checkWeather(tempActual: number, stateSky: string, lluvia: number){
   this.checkSky(stateSky)
    if (this.stateSkyValue === "despejado" || this.stateSkyValue === "poco nuboso" ){
     this.recommendationService.findByWeather('sol').subscribe(data => this.recommendationSky = data)
    }

    if (this.checkRain(lluvia))
      this.recommendationService.findByWeather('lluvia').subscribe(data => this.recommendationRain = data )
    
    if (this.tempValue)
    this.recommendationService.findByWeather(this.tempValue).subscribe(data => this.recommendationTemp = data )

    console.log(this.tempValue);
    

    if (this.checkTemperature(tempActual)){
       this.recommendationService.findByWeather(this.checkTemperature(tempActual)).subscribe(data =>{ 
        this.recommendationTemp = data;
        console.log(this.recommendationTemp);
        
       })
    }
  }

  checkTemperature(temp: number){
      if(temp > TEMP_CALOR){
       this.tempValue = "calor"
      }else if(temp < TEMP_FRIO){
        this.tempValue = "frio"
      } 
      return this.tempValue
  }

  checkSky(stateSky: string){ 
    switch (stateSky){
      
      case "11":
      case "11n":
        this.stateSkyValue = "despejado";
        break;
      case "12":
      case "13":
        
      this.stateSkyValue = "poco nuboso"
          break;
        
      case "17":
      case "17n":
        
      this.stateSkyValue = "nubes altas"
        break; 
      case "16":
      case "16n":
      case "15":
      case "15n":
      case "14":
      case "14n":
        this.stateSkyValue = "nuboso";
        break;
      
      case "64":
      case "63":
      case "62":
      case "61":
      case "54":
      case "53":
      case "52":
      case "51":
        this.stateSkyValue = "cubierto con tormenta";
        break;
      case "46":
      case "45":
      case "44":
      case "26":
      case "24":
      case "23":
      case "43":
      case "43n":
        this.stateSkyValue = "lluvia"
        break;
      case "74":
      case "73":
      case "72":
      case "71":
      case "36":
      case "35":
      case "34":
      case "33":
        this.stateSkyValue = "nieve";
        break;
      case "81":
      case "81n":
      case "82":
      case "82n":
        this.stateSkyValue =  "niebla";
        break;

      default: 
      this.stateSkyValue = "nusé"
    }

    console.log(`estado: ${this.stateSkyValue}`);
    console.log(`statesky: ${stateSky}`);
    return this.stateSkyValue;
  }

  checkRain(rain: number){
    let lluvia: boolean = false
    if(rain > MIN_LLUVIA_ESCASA){
      lluvia = true;
    } 
    return lluvia;
  }

}
