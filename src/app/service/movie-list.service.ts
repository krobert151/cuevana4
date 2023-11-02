import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieListResponse } from '../modals/movie-list/movie-list.module';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieResponse } from '../modals/movie/movie.module';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  TOKENParam: string = '?api_key=5b1cf6fd754627940a36f56d2fa98242';
  HeaderURL: string = 'https://api.themoviedb.org/3/'

  constructor(private https: HttpClient) { }

  getPopularMovies(): Observable<MovieListResponse> {
    return this.https.get<MovieListResponse>(`${environment.HeadUrl}popular?api_key=${environment.ApiKey}`);
  }

  getMostRatedMovies(): Observable<MovieListResponse> {
    return this.https.get<MovieListResponse>(`${environment.HeadUrl}top_rated?api_key=${environment.ApiKey}`);
  }
  getNowPlayingMovies(page:string): Observable<MovieListResponse> {
    return this.https.get<MovieListResponse>(`${environment.HeadUrl}now_playing?api_key=${environment.ApiKey}&page=${page}`);
  }

  getMovieById(id:string):Observable<MovieResponse>{
    return this.https.get<MovieResponse>(`${environment.HeadUrl}${id}?api_key=${environment.ApiKey}`);
  }


}
