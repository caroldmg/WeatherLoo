import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

 // url: string = "http://localhost:3000/provincias"

  constructor(private httpClient: HttpClient) { }

  // findAllProvincias(): Observable <IProvincia[]>{
  //   return this.httpClient.get<IProvincia[]>(this.url);
  // }
}
