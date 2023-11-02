import { Component, Injectable, OnInit } from '@angular/core';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { Movie, MovieListResponse } from 'src/app/modals/movie-list/movie-list.module';
import { MovieListService } from 'src/app/service/movie-list.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {

  ListInfo!: MovieListResponse;
  ListMovies!: Movie[]
  pageIndex: number = 1;
  totalPages!:number;
  totalItems!:number;
  itemPerPage:number = 20;

  constructor(private movieService: MovieListService){}

  ngOnInit(): void {
    this.movieService.getNowPlayingMovies(this.pageIndex.toString()).subscribe(resp=>{
      this.ListInfo=resp;
      this.ListMovies= this.ListInfo.results;
      this.totalPages= resp.total_pages;
      this.totalItems=resp.total_results;

    })
  }

  onPagintatorChange(event:PageEvent){
    this.pageIndex=event.pageIndex;
    this.loadMoviesList()
  }
  loadMoviesList(){
    this.movieService.getNowPlayingMovies(this.pageIndex.toString()).subscribe(resp=>{
      this.ListInfo=resp;
      this.ListMovies= this.ListInfo.results;
    })
  }



}
