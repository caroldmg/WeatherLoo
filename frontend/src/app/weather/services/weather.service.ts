import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeather } from '../models/weather.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url= "https://www.el-tiempo.net/api/json/v2"



  constructor(private httpClient: HttpClient) { }

  getProvinceWeather(provinceId: number): Observable <IWeather> {
    return this.httpClient.get<IWeather>(`${this.url}/provincias/${provinceId}`)
  }

  getLocalWeather(townId: number): Observable <IWeather> {
    return this.httpClient.get<IWeather>(`${this.url}/municipios/${townId}`)

  /**
   * getWeather(idMunicipio: number): Observable IWeather (cuando tengamos los atributos de cómo lo devuelve){
    return this.httpClient.get<IWeather>(`${this.url}/${idProvincia}/municipios/${idMunicipio}`)

  }
}
