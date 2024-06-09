import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private API_URL = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  getCharacters(page: number = 1): Observable<any> {
    return this.http.get(`${this.API_URL}/character/?page=${page}`);
  }

  getLocations(page: number = 1): Observable<any> {
    return this.http.get(`${this.API_URL}/location/?page=${page}`);
  }

  getEpisodes(page: number = 1): Observable<any> {
    return this.http.get(`${this.API_URL}/episode/?page=${page}`);
  }
}