import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/modals/movie-list/movie-list.module';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent {

  @Input()movie!:Movie;

  photoUrlHeader: string = 'https://image.tmdb.org/t/p/original/';

  getMovieImg() {
    return this.photoUrlHeader.concat(this.movie.poster_path);
  }


}
