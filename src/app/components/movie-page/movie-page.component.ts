import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieResponse } from 'src/app/modals/movie/movie.module';
import { MovieListService } from 'src/app/service/movie-list.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit{

  movie!:MovieResponse;
  id!:string|null;
  constructor(private movieService: MovieListService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id');
    if(this.id!=null){
      this.movieService.getMovieById(this.id).subscribe(resp=>{
        this.movie=resp;
      })
    }
  }
  getMovieBackground(){
    return (`${environment.Photoheader}${this.movie.backdrop_path}`)
  }
  getMoviePoster(){
    return (`${environment.Photoheader}${this.movie.poster_path}`)
  }
  getMovieAnio(){
    return this.movie.release_date.split('-')[0];
  }
  getMovieDate(){
    return this.movie.release_date.split('-').join('/');
  }
  getMovieGenders(){
    var movieGenders = [];
    for (let i = 0; i < this.movie.genres.length; i++) {
      movieGenders.push(this.movie.genres[i].name);
    }
    return movieGenders.join(' ,');
  }
  getMovieDuration(){
    var totalminutes = this.movie.runtime;
    var horas = totalminutes/60;
    horas= parseInt(horas.toString());
    var minutos = totalminutes%60;
    return (horas+'h'+minutos+'m')
  }


}
