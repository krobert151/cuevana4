import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Movie } from 'src/app/modals/movie-list/movie-list.module';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {

  constructor(public dialogref: MatDialogRef<MovieDetailComponent>, @Inject(MAT_DIALOG_DATA) public data: Movie) { }

  photoUrlHeader: string = 'https://image.tmdb.org/t/p/original/';


  getMovieImg() {
    return this.photoUrlHeader.concat(this.data.poster_path);

  }

  getMoviePoster() {
    return this.photoUrlHeader.concat(this.data.backdrop_path);
  }
}
