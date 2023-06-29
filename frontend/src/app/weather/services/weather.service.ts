import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url= "https://www.el-tiempo.net/api/json/v2"
  
  //https://www.el-tiempo.net/api/json/v2/municipios/01001 trae el tiempo del municipio

  constructor() { }

  /**
   * getWeather(idMunicipio: number): Observable IWeather (cuando tengamos los atributos de cómo lo devuelve){
    return this.httpClient.get<IWeather>(`${this.url}/${idProvincia}/municipios/${idMunicipio}`)
  }
   */
}
