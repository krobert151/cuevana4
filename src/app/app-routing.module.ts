import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { PageHomeComponent } from './ui/page-home/page-home.component';

const routes: Routes = [
  { path: 'movie/:id', component: MoviePageComponent },
  { path: 'home', component: PageHomeComponent },
  { path: '', pathMatch: 'full', component: PageHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
