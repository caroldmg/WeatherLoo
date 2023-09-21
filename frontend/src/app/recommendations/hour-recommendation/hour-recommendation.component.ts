import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationModule } from 'src/app/location/location.module';
import { WeatherService } from 'src/app/weather/services/weather.service';
import { RecommendationService } from '../services/recommendation.service';
import { Recommendation } from '../models/recommendation';
import { PersonalRecommendationsComponent } from '../personal-recommendations/personal-recommendations.component';
import { MADRID_TOWNCODE } from 'src/app/shared/constants';
import { LocationService } from 'src/app/location/services/location.service';
import { IProvince } from 'src/app/location/models/province.model';
import { ITown } from 'src/app/location/models/town.model';
import { IWeather } from 'src/app/weather/models/weather.model';

@Component({
  selector: 'app-hour-recommendation',
  templateUrl: './hour-recommendation.component.html',
  styleUrls: ['./hour-recommendation.component.css']
})
export class HourRecommendationComponent implements OnInit {

  recommendationTemp: Recommendation[] = [];

  municipio: ITown | undefined;
  provincia: IProvince | undefined;

  weather: IWeather | undefined;

  constructor(
    private weatherService: WeatherService,
    private locationService: LocationService,
    private activatedRoute: ActivatedRoute,
    private recommendationService: RecommendationService,
    private personalRecom: PersonalRecommendationsComponent
  ){}

  ngOnInit(): void {
    this.loadWeather();
  }

  loadWeather(){
    this.activatedRoute.params.subscribe((params) =>{
      const townCode = params['townCode'] ?? MADRID_TOWNCODE;
      console.log(townCode);

      this.locationService.findTownByTownCode(townCode).subscribe(data => {
        this.municipio = data;
        this.provincia = this.municipio.province;

        this.weatherService.getWeatherRealTime(townCode, this.provincia.id).subscribe(data => {
          this.weather = data;
          
          console.log("cargando weather")
          console.log(this.weather)

          this.personalRecom.checkWeather(this.weather.temperatura_actual, this.weather.stateSky.id, this.weather.lluvia)

        })
      });
      })
      
    }

    checkHourlyWeather(hour: number){
      //¿cómo lo planteams? quiero poder poner recomendacion segun la hora, pero creo que tendria que buscar dentro del array de temperaturas la de la hora adecuada, cómo hacerlo sin cambiar el código inicial de recommendations?
    }
  }
