import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { BASE_URL, TOKEN } from '../shared/constants';

export interface Token {
  sub: number; // id del usuario
  email: string;
  fullName: string
  exp: number; // timestamp con la fecha de expiración
  iat: number; // Issued At: campo con la fecha de emisión del token
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  url: string = `${BASE_URL}/auth`;

  // BehaviorSubject emite valores a suscriptores, es un Observable especializado
  // que siempre emite el último valor a sus observadores
  isLoggedIn = new BehaviorSubject<boolean>(this.hasToken());
  currentUserName = new BehaviorSubject<string>(this.getCurrentUserName());


  constructor(
    private httpClient: HttpClient,
    private router: Router
    ) { }

  login(login: any): Observable<any> {
    return this.httpClient.post(`${this.url}/login`, login);
  }

  refreshToken(): Observable<any> {
    return this.httpClient.get(`${this.url}/refresh`);
  }

  register(user: any): Observable<any> {
    return this.httpClient.post(`${this.url}/register`, user);
  }

  logout() {
    localStorage.removeItem(TOKEN);
    this.router.navigate(['/auth/login']);
    // Cuando el usuario cierra la sesión,
    // emitimos false para isLoggedIn
    this.isLoggedIn.next(false);
  }

  hasToken() : boolean {
    console.log('checking hasToken()')
    return localStorage.getItem(TOKEN) !== null;
  }

  getCurrentUserName(): string {
    let token = localStorage.getItem(TOKEN);
    if (!token) return '';

    let decoded_token: Token = jwt_decode(token);
    return decoded_token.fullName;
  }

  handleLoginResponse(token: any) {
    // Guarda el token en localStorage y actualiza el estado de isAdmin y isLoggedIn
    localStorage.setItem(TOKEN, token);
    let decoded_token: Token = jwt_decode(token);

    this.isLoggedIn.next(true);
    this.currentUserName.next(decoded_token.fullName);
  }



}

