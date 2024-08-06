import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:8000/api/categories";

  fetchAll(){
    return this.http.get<[]>(this.url );
  }
}
