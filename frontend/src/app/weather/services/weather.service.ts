import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url= "https://www.el-tiempo.net/api/json/v2/provincias"

  constructor() { }

  /**
   * getWeather(idProvincia: number, idMunicipio: number): Observable IWeather (cuando tengamos los atributos de cómo lo devuelve){
    return this.httpClient.get<IWeather>(`${this.url}/${idProvincia}/municipios/${idMunicipio}`)
  }
   */
}
