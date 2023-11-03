import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieListResponse } from '../modals/movie-list/movie-list.module';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieResponse } from '../modals/movie/movie.module';
import { VideoResponse } from '../modals/video/video.module';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {



  constructor(private https: HttpClient) { }

  getPopularMovies(): Observable<MovieListResponse> {
    return this.https.get<MovieListResponse>(`${environment.HeadUrl}popular?api_key=${environment.ApiKey}`);
  }

  getMostRatedMovies(): Observable<MovieListResponse> {
    return this.https.get<MovieListResponse>(`${environment.HeadUrl}top_rated?api_key=${environment.ApiKey}`);
  }
  getNowPlayingMovies(page: string): Observable<MovieListResponse> {
    return this.https.get<MovieListResponse>(`${environment.HeadUrl}now_playing?api_key=${environment.ApiKey}&page=${page}`);
  }

  getMovieById(id: string): Observable<MovieResponse> {
    return this.https.get<MovieResponse>(`${environment.HeadUrl}${id}?api_key=${environment.ApiKey}`);
  }

  getVideoById(id: string): Observable<VideoResponse> {
    return this.https.get<VideoResponse>(`${environment.HeadUrl}${id}/videos?api_key=${environment.ApiKey}`);
  }


}
