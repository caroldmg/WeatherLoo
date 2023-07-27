import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/shared/constants';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = `${BASE_URL}/users`;

  constructor(private httpClient: HttpClient) { }

  findCurrentUser(): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.url}/current`);
  }

  update(user: IUser): Observable<IUser> {
    return this.httpClient.put<IUser>(`${this.url}`, user);
  }

  addFavTown(townCode: string){
    return this.httpClient.get<IUser>(`${this.url}/add/${townCode}`)
  }

  httpOptions = {
    observe: 'response' as 'body'
  }
  deleteCurrentUser(id: number): Observable<HttpResponse<{}>> {
    return this.httpClient.delete<HttpResponse<{}>>(`${this.url}/delete`, this.httpOptions);
  }
}
// TENADRIAMOS Q TENER UN SERVICE UN CONTROLER