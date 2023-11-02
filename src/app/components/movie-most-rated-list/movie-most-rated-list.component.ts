import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Movie } from 'src/app/modals/movie-list/movie-list.module';
import { MovieListService } from 'src/app/service/movie-list.service';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

@Component({
  selector: 'app-movie-most-rated-list',
  templateUrl: './movie-most-rated-list.component.html',
  styleUrls: ['./movie-most-rated-list.component.css']
})
export class MovieMostRatedListComponent implements OnInit {

  MostRatedList: Movie[] = [];

  constructor(private movieListService: MovieListService, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.movieListService.getMostRatedMovies().subscribe(resp => {
      this.MostRatedList = resp.results;
    })
  }

  onMovieClicled(movie: Movie) {

    const dialogRef = this.dialog.open(MovieDetailComponent, {
      data: movie.id.toString()
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });


  }



}
