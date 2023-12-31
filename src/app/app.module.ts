import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImportModule } from './import-module/import/import.module';
import { HttpClientModule } from '@angular/common/http';
import { PageHomeComponent } from './ui/page-home/page-home.component';
import { MoviePopularListComponent } from './components/movie-popular-list/movie-popular-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieMostRatedListComponent } from './components/movie-most-rated-list/movie-most-rated-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    MoviePopularListComponent,
    MovieItemComponent,
    MovieMostRatedListComponent,
    MovieDetailComponent,
    MovieListComponent,
    MoviePageComponent,
    MenuComponent,
    MovieListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ImportModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
