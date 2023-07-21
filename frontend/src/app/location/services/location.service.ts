import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProvince } from '../models/province.model';
import { Observable } from 'rxjs';
import { ITown } from '../models/town.model';
import { IAutonomy } from '../models/autonomy.model';
import { BASE_URL } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  //db.json 
  urlProvinces: string = `${BASE_URL}/provinces`;
  urlTowns: string = `${BASE_URL}/towns`;
  urlAutonomies: string = `${BASE_URL}/autonomy`;
  
  constructor(private httpClient: HttpClient) { }

  findAllProvinces(): Observable <IProvince[]>{
    return this.httpClient.get<IProvince[]>(this.urlProvinces);
  }

  findProvinceById(id: number): Observable <IProvince>{
    return this.httpClient.get<IProvince>(`${this.urlProvinces}/id/${id}`)
  }

  findProvincesByAutonomyId(autonomyId: string): Observable <IProvince[]>{
    return this.httpClient.get<IProvince[]>(`${this.urlProvinces}/autonomy/${autonomyId}`)
  
  }

  findAllTowns(): Observable <ITown[]> {
    return this.httpClient.get<ITown[]>(this.urlTowns);
  }

  findTownByTownCode(townCode: string): Observable <ITown>{
    return this.httpClient.get<ITown>(`${this.urlTowns}/townCode/${townCode}`)
  }

  findTownsByProvinceId(provinceId: number): Observable <ITown[]>{
    return this.httpClient.get<ITown[]>(`${this.urlTowns}/province/${provinceId}`)
  }
  
  findTownsByPopularTrue(): Observable <ITown[]>{
    return this.httpClient.get<ITown[]>(`${this.urlTowns}/popular`)
  }
  
  findAllAutonomies(): Observable <IAutonomy[]>{
    return this.httpClient.get<IAutonomy[]>(this.urlAutonomies)
  }

  findAutonomyById(id: string): Observable <IAutonomy>{
    return this.httpClient.get<IAutonomy>(`${this.urlAutonomies}/id/${id}`)
  }
  searchByTownName(name: string): Observable <ITown>{
    return this.httpClient.get<ITown>(`${this.urlTowns}/name/${name}`)
  }
  
}
