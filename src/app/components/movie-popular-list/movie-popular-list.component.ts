import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Movie } from 'src/app/modals/movie-list/movie-list.module';
import { MovieListService } from 'src/app/service/movie-list.service';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

@Component({
  selector: 'app-movie-popular-list',
  templateUrl: './movie-popular-list.component.html',
  styleUrls: ['./movie-popular-list.component.css']
})
export class MoviePopularListComponent implements OnInit {

  PopularList: Movie[] = [];

  constructor(private movieListService: MovieListService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.movieListService.getPopularMovies().subscribe(resp => {
      this.PopularList = resp.results;
    })
  }

  onMovieClicked(movie: Movie) {

    const dialogRef = this.dialog.open(MovieDetailComponent, {
      data: movie
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }



}
