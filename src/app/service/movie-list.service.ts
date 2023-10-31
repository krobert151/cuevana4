import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieListResponse } from '../modals/movie-list/movie-list.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  TOKENParam: string = '?api_key=5b1cf6fd754627940a36f56d2fa98242';
  HeaderURL: string = 'https://api.themoviedb.org/3/'

  constructor(private https: HttpClient) { }

  getPopularMovies(): Observable<MovieListResponse> {
    return this.https.get<MovieListResponse>(this.HeaderURL + 'movie/popular' + this.TOKENParam);
  }

  getMostRatedMovies(): Observable<MovieListResponse> {
    return this.https.get<MovieListResponse>(this.HeaderURL + 'movie/top_rated' + this.TOKENParam);
  }

}
