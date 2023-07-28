import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/shared/constants';
import { Recommendation } from '../models/recommendation';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  url: string = `${BASE_URL}/recommendation`;
  

  constructor(private httpClient: HttpClient) {}

  findAll(): Observable <Recommendation[]>{
    return this.httpClient.get<Recommendation[]>(this.url)
  }

  findByType(type: string): Observable <Recommendation[]>{
    return this.httpClient.get<Recommendation[]>(`${this.url}/type/${type}`)
  }

  findByWeather(weather: string): Observable<Recommendation[]>{
    return this.httpClient.get<Recommendation[]>(`${this.url}/weather/${weather}`)
  }
}
