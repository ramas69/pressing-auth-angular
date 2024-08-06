// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ICredentials, IToken } from '../entities';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:8000/api';

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: ICredentials): Observable<IToken> {
    return this.http.post<IToken>(`${this.url}/login_check`, credentials).pipe(
      tap(response => this.saveToken(response))
    );
  }

  saveToken(tokenResponse: IToken): void {
    localStorage.setItem('token', JSON.stringify(tokenResponse));
  }

  isLogged(): boolean {
    const tokenStr = localStorage.getItem('token');
    if (!tokenStr) return false;

    const tokenData: IToken = JSON.parse(tokenStr);
    if (tokenData.expiresAt) {
      return new Date().getTime() < tokenData.expiresAt;
    }
    return !!tokenData.token;
  }

  getToken(): string | null {
    const tokenStr = localStorage.getItem('token');
    if (!tokenStr) return null;

    const tokenData: IToken = JSON.parse(tokenStr);
    if (tokenData.expiresAt && new Date().getTime() > tokenData.expiresAt) {
      this.logout();
      return null;
    }
    return tokenData.token;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}