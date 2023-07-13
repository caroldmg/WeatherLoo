import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProvince } from '../models/province.model';
import { Observable } from 'rxjs';
import { ITown } from '../models/town.model';
import { IAutonomy } from '../models/autonomy.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  //db.json 
  urlProvinces: string = "http://localhost:3000/provinces";
  urlTowns: string = "http://localhost:3000/towns";
  urlAutonomies: string = "http://localhost:3000/autonomies";
  urlPopularTowns: string = "http://localhost:3000/popularTowns";


  constructor(private httpClient: HttpClient) { }

  findAllProvinces(): Observable <IProvince[]>{
    return this.httpClient.get<IProvince[]>(this.urlProvinces);
  }

  findProvinceById(id: number): Observable <IProvince>{
    return this.httpClient.get<IProvince>(`${this.urlProvinces}/${id}`)
  }

  findProvincesByAutonomyId(autonomyId: string): Observable <IProvince[]>{
    return this.httpClient.get<IProvince[]>(`${this.urlProvinces}?autonomyId=${autonomyId}`)
  
  }

  findAllTowns(): Observable <ITown[]> {
    return this.httpClient.get<ITown[]>(this.urlTowns);
  }

  findTownsByTownsCode(townCode: string): Observable <ITown[]>{
    return this.httpClient.get<ITown[]>(`${this.urlTowns}?townCode=${townCode}`)
  }

  findTownsByProvinceId(provinceId: number): Observable <ITown[]>{
    return this.httpClient.get<ITown[]>(`${this.urlTowns}?CODPROV=${provinceId}`)
  }
  
  findTownsByPopularTrue(): Observable <ITown[]>{
    return this.httpClient.get<ITown[]>(`${this.urlTowns}?isPopular=true`)
  }
  
  findAllAutonomies(): Observable <IAutonomy[]>{
    return this.httpClient.get<IAutonomy[]>(this.urlAutonomies)
  }

  findAutonomyById(id: string): Observable <IAutonomy>{
    return this.httpClient.get<IAutonomy>(`${this.urlAutonomies}?autonomyId=${id}`)
  }


  findPopularTowns(): Observable <ITown[]>{
    return this.httpClient.get<ITown[]>(this.urlPopularTowns)
  }
  
}
