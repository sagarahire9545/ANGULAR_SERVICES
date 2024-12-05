import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmailComponent } from './components/email/email.component';
import { MovieComponent } from './movie_service_components/movie/movie.component';
import { MovieListComponent } from './movie_service_components/movie-list/movie-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
{
  component:HomeComponent,
  path:"",
  pathMatch:"full"
},
{
  component:EmailComponent,
  path: "sendemail",
  pathMatch:"full"

},
{
  component:MovieComponent,
  path:"gotoMovie",
  pathMatch:"full"

},{
  component:MovieListComponent,
  path:"movieList",
  pathMatch:"full"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
