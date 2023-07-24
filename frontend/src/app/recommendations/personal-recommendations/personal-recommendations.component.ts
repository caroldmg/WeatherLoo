import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MADRID_TOWNCODE, MIN_LLUVIA_ESCASA, MIN_LLUVIA_INTENSA, TEMP_MAX_FRIO, TEMP_MIN_CALOR } from 'src/app/shared/constants';
import { RECOMMENDATIONS } from 'src/app/shared/recommendations';
import { IWeather } from 'src/app/weather/models/weather.model';
import { WeatherService } from 'src/app/weather/services/weather.service';

@Component({
  selector: 'app-personal-recommendations',
  templateUrl: './personal-recommendations.component.html',
  styleUrls: ['./personal-recommendations.component.css']
})
export class PersonalRecommendationsComponent implements OnInit {

  weather: IWeather | undefined;
  recommendations: any[] = [];

  constructor(
    private weatherService: WeatherService,
    private activatedRoute: ActivatedRoute
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
   
    this.checkTemperature(tempActual);
    this.checkRain(lluvia)

    if (this.checkSky(stateSky) === "despejado" || this.checkSky(stateSky) === "poco nuboso" ){
      this.recommendations.push()
    }

  }

  checkTemperature(temp: number){
      if(temp > TEMP_MIN_CALOR){
        return "calor"
      }else if(temp < TEMP_MAX_FRIO){
        return "frio"
      } else return ""
  }

  checkSky(stateSky: string){ 
    let estado: string = ""
    switch (stateSky){
      
      case "11":
      case "11n":
        estado = "despejado";
        break;
      case "12":
      case "13":
        
          estado = "poco nuboso"
          break;
        
      case "17":
      case "17n":
        
        estado = "nubes altas"
        break; 
      case "16":
      case "16n":
      case "15":
      case "15n":
      case "14":
      case "14n":
        estado = "nuboso";
        break;
      
      case "64":
      case "63":
      case "62":
      case "61":
      case "54":
      case "53":
      case "52":
      case "51":
        estado = "cubierto con tormenta";
        break;
      case "46":
      case "45":
      case "44":
      case "26":
      case "24":
      case "23":
      case "43":
      case "43n":
        estado = "lluvia"
        break;
      case "74":
      case "73":
      case "72":
      case "71":
      case "36":
      case "35":
      case "34":
      case "33":
        estado = "nieve";
        break;
      case "81":
      case "81n":
      case "82":
      case "82n":
        estado =  "niebla";
        break;

      default: 
        estado = "nusé"
    }

    console.log(`estado: ${estado}`);
    console.log(`statesky: ${stateSky}`);
    return estado;
  }

  checkRain(rain: number){
    let lluvia: boolean = false
    if(rain < MIN_LLUVIA_ESCASA){
      lluvia = false;
    } else 
      lluvia = true
    
    return lluvia;
  }

}
