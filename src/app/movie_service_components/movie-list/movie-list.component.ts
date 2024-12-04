import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit{

  movies: Movie[] = [];

  constructor(private movieService: MovieService){}

  ngOnInit(): void {
    
    this.movieService.getMovieLists().subscribe((movies: Movie[]) =>
    this.movies=movies
  );

   }

  }

  




