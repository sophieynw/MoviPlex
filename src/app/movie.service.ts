import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieDatabase } from './movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  getLocal(): Observable<MovieDatabase> {
    return this.http.get<MovieDatabase>('data/movies.json');
  }
}
