import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MADRID_TOWNCODE, MIN_LLUVIA_ESCASA, TEMP_FRIO, TEMP_CALOR, ALERTS, MIN_LLUVIA_INTENSA, TEMP_MUCHO_CALOR, TEMP_MUCHO_FRIO, VIENTO_ALERT } from 'src/app/shared/constants';

import { IWeather } from 'src/app/weather/models/weather.model';
import { WeatherService } from 'src/app/weather/services/weather.service';
import { RecommendationService } from '../services/recommendation.service';
import { Recommendation } from '../models/recommendation';
import { ITown } from 'src/app/location/models/town.model';
import { IProvince } from 'src/app/location/models/province.model';
import { LocationService } from 'src/app/location/services/location.service';

@Component({
  selector: 'app-personal-recommendations',
  templateUrl: './personal-recommendations.component.html',
  styleUrls: ['./personal-recommendations.component.css']
})
export class PersonalRecommendationsComponent implements OnInit {

  weather: IWeather | undefined;

  //añadir dato de provincia a llamada de weather
  municipio: ITown | undefined;
  provincia: IProvince | undefined;

  recommendationSky: Recommendation[] = [];
  recommendationRain: Recommendation[] = [];
  recommendationTemp: Recommendation[] = [];
  tempValue: string = '';
  stateSkyValue: string = '';
  alerts: string[] = [];
 
  randomValue: string = '';
  

  constructor(
    private weatherService: WeatherService,
    private locationService: LocationService,
    private activatedRoute: ActivatedRoute,
    private recommendationService: RecommendationService
  ) {}

  ngOnInit(): void {
    this.loadWeather();
    this.randomRecom()
  }

  loadWeather() {
    this.activatedRoute.params.subscribe((params) => {
      const townCode = params['townCode'] ?? MADRID_TOWNCODE;
      console.log(townCode);

      this.locationService.findTownByTownCode(townCode).subscribe(data =>{ 
        this.municipio = data;
        this.provincia = this.municipio.province
        this.weatherService.getWeatherRealTime(townCode, this.provincia.id).subscribe(data => {
          this.weather = data;
          
          console.log("cargando weather")
          console.log(this.weather)
  
          this.stateSkyValue = this.weather.stateSky.description;
  
  
           this.checkWeather(this.weather.temperatura_actual, this.weather.stateSky.id, this.weather.lluvia);
           
           console.log('recommendationSky --> ' + this.recommendationSky)
        })
      });

    
    })

  }

  /**
   * la funcion checkWeather trae las recomendaciones finales (busca en BD) según los valores que traigan las funciones de checkSky, checkTemp y checkRain
   * @param tempActual 
   * @param stateSky 
   * @param lluvia 
   */

  checkWeather(tempActual: number, stateSky: string, lluvia: number){
   
    this.checkSky(stateSky)
    if (this.stateSkyValue === "despejado" || this.stateSkyValue === "poco nuboso" ){
     this.recommendationService.findByWeather('sol').subscribe(data =>{
      console.log(data); 
      this.recommendationSky = data;
      console.log('dentro de checkweather - checkSky' + this.recommendationSky);
      
    });
    } else if (this.checkSky(stateSky) === "tormenta"){
      this.alerts.push(ALERTS["tormenta"]);
    }else if (this.checkSky(stateSky) === "nieve"){
      this.alerts.push(ALERTS["nieve"]);
    }

    if (this.checkRain(lluvia)){
      this.recommendationService.findByWeather('lluvia').subscribe(data => this.recommendationRain = data );
      if(this.checkRain(lluvia) === "lluvia intensa"){
        this.alerts.push(ALERTS["lluvia"])
      }
    }
    if (this.tempValue){
      this.recommendationService.findByWeather(this.tempValue).subscribe(data => this.recommendationTemp = data)
    }
    

    if (this.checkTemperature(tempActual)){
       this.recommendationService.findByWeather(this.checkTemperature(tempActual)).subscribe(data =>{ 
        this.recommendationTemp = data;
       })
    }
  }

  //analizamos individualmente los valores de cielo, temperatura y lluvia y asignamos un valor
  checkTemperature(temp: number){
      
      if (temp >= TEMP_MUCHO_CALOR){
        this.tempValue = "calor";
        this.alerts.push(ALERTS["mucho calor"])
      }else if(temp > TEMP_CALOR && temp < TEMP_MUCHO_CALOR){
       this.tempValue = "calor"
      } else if(temp < TEMP_FRIO && temp > TEMP_MUCHO_FRIO ){
        this.tempValue = "frio";
        this.alerts.push(ALERTS["mucho frio"])
      } else if (temp <= TEMP_MUCHO_FRIO){
        this.tempValue = "mucho frio"
      }
      return this.tempValue
  }

  /**
   * este switch tangrande es así porque la API nos trae los valores como un string con esta serie de números 
   * @param stateSky 
   * @returns 
   */
  checkSky(stateSky: string){ 
    switch (stateSky){
      
      case "11":
        
        this.stateSkyValue = "despejado";  
        break;
      case "11n":
        this.stateSkyValue = "despejado";
        
        break;
      case "12":
      case "13":
        
        this.stateSkyValue = "poco nuboso"
          break;      
      case "17":
        
        this.stateSkyValue = "nubes altas";
        break;
        
      case "17n":
        
        this.stateSkyValue = "nubes altas"
        break; 
      case "16":
      case "14":
      case "15":
      case "16n":
      case "15n":
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
        
        this.stateSkyValue = "tormenta";
        break;
      case "46":
      case "45":
      case "44":
      case "26":
      case "24":
      case "23":
      case "43":
      case "43n":
        
        this.stateSkyValue = "lluvia";
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
    let lluvia: string = '';
    if(rain > MIN_LLUVIA_ESCASA && rain < MIN_LLUVIA_INTENSA){
      lluvia = "lluvia";
    } else if(rain >= MIN_LLUVIA_INTENSA){
      lluvia = "lluvia intensa"
    }
    return lluvia;
  }

  checkWind(racha: number[]){
    let wind: number = 0;
    for(let i=0; i<= racha.length; i++){
      if(racha[i] >= wind){
        wind = racha[i];
      }
    }
    if(wind > VIENTO_ALERT ){
      this.alerts.push(ALERTS["viento"])
    }
  }

  jokes = [
    'Si no sabes qué ponerte, ponte feliz!',
    'Si tu día no ha empezado bien, échate una siesta y vuelve a empezar de nuevo',
    'Ilumina tu día con una sonrisa',
    'Deja marcado en tu corazón que cada día es el mejor día del año',
    'La única diferencia entre un buen y un mal día es tu actitud',
    'Sé la EXTRA en extraordinaria',
    'Lo que hagas hoy puede mejorar el resto de tus mañanas'
  ];

  randomRecom() {
    let index = Math.floor((Math.random() * this.jokes.length) - 1);
    this.randomValue = this.jokes[index]
  }

}
