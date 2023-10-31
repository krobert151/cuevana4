import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/modals/movie-list/movie-list.module';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {

  @Input() movie!: Movie;
  @Output() movieShowDetail = new EventEmitter<Movie>()

  photoUrlHeader: string = 'https://image.tmdb.org/t/p/original/';

  getMovieImg() {
    return this.photoUrlHeader.concat(this.movie.poster_path);

  }
  viewMovie() {
    this.movieShowDetail.emit(this.movie);
  }



}

