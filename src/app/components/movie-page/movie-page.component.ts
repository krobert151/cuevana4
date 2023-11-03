import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieResponse } from 'src/app/modals/movie/movie.module';
import { VideoResponse } from 'src/app/modals/video/video.module';
import { MovieListService } from 'src/app/service/movie-list.service';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SagaResponse } from 'src/app/modals/saga/saga.module';


@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  movie!: MovieResponse;
  video!: VideoResponse;
  videoUrl!: SafeResourceUrl;
  id!: string | null;
  saga!: SagaResponse;
  constructor(private movieService: MovieListService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.movieService.getMovieById(this.id).subscribe(resp => {
        this.movie = resp;
      })
      this.movieService.getVideoById(this.id).subscribe(resp => {
        this.video = resp;
      })
      if (this.movie.belongs_to_collection != null) {

      }
    }


  }
  getMovieBackground() {
    return (`${environment.Photoheader}${this.movie.backdrop_path}`)
  }
  getMoviePoster() {
    return (`${environment.Photoheader}${this.movie.poster_path}`)
  }
  getMovieAnio() {
    return this.movie.release_date.split('-')[0];
  }
  getMovieDate() {
    return this.movie.release_date.split('-').join('/');
  }
  getMovieGenders() {
    var movieGenders = [];
    for (let i = 0; i < this.movie.genres.length; i++) {
      movieGenders.push(this.movie.genres[i].name);
    }
    return movieGenders.join(' ,');
  }
  getMovieDuration() {
    var totalminutes = this.movie.runtime;
    var horas = totalminutes / 60;
    horas = parseInt(horas.toString());
    var minutos = totalminutes % 60;
    return (horas + 'h' + minutos + 'm')
  }
  getMovieTrailer(key: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`//www.youtube.com/embed/${key}?autoplay=0&amp;origin=https%3A%2F%2Fwww.themoviedb.org&amp;hl=es&amp;modestbranding=1&amp;fs=1&amp;autohide=1`);
  }


}
