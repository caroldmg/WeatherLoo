import { HttpClient } from '@angular/common/http';
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
}
// TENADRIAMOS Q TENER UN SERVICE UN CONTROLER