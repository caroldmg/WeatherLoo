import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeather } from '../models/weather.model';
import { HttpClient } from '@angular/common/http';
import { ITown } from 'src/app/location/models/town.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url= "https://www.el-tiempo.net/api/json/v2"



  constructor(private httpClient: HttpClient) { }


  getWeatherRealTime(townId: string, provinceId: string): Observable <IWeather> {
    return this.httpClient.get<IWeather>(`${this.url}/provincias/${provinceId}/municipios/${townId}`)

  
  }
  
}
