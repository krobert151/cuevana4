import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Movie, MovieListResponse } from 'src/app/modals/movie-list/movie-list.module';
import { MovieResponse } from 'src/app/modals/movie/movie.module';
import { MovieListService } from 'src/app/service/movie-list.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit  {

  movie!:MovieResponse;

  constructor(private movieService: MovieListService,public dialogref: MatDialogRef<MovieDetailComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }
  ngOnInit(): void {
    this.movieService.getMovieById(this.data).subscribe(resp=>{
      this.movie=resp;
    })

  }

  photoUrlHeader: string = 'https://image.tmdb.org/t/p/original/';


  getMovieImg() {
    return this.photoUrlHeader.concat(this.movie.poster_path);
  }

  getMoviePoster() {
    return this.photoUrlHeader.concat(this.movie.backdrop_path);
  }

}
