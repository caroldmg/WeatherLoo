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


  constructor(private httpClient: HttpClient) { }

  findAllProvinces(): Observable <IProvince[]>{
    return this.httpClient.get<IProvince[]>(this.urlProvinces);
  }

  findProvinceById(id: number): Observable <IProvince>{
    return this.httpClient.get<IProvince>(`${this.urlProvinces}/id`)
  }
  findAllTowns(): Observable <ITown[]> {
    return this.httpClient.get<ITown[]>(this.urlTowns);
  }

  findTownByProvinceId(provinceId: number): Observable <ITown[]>{
    return this.httpClient.get<ITown[]>(`${this.urlTowns}?CODPROV=${provinceId}`)
  }

  findProvincesByAutonomyId(autonomyId: number): Observable <IProvince[]>{
    return this.httpClient.get<IProvince[]>(`${this.urlProvinces}?autonomyId=${autonomyId}`)
  }


}
