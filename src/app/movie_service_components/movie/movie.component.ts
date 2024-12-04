import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { title } from 'process';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { error } from 'console';

@Component({
  selector: 'app-movie',
  standalone: false,
  
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit{

  movieForm: FormGroup;

  isAddMovieFormVisible:boolean = false;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  constructor(private movieService:MovieService, private fb: FormBuilder){

    this.movieForm = this.fb.group({

      title: ['', Validators.required],
      description: ['', Validators.required],  // Ensure this is here
      cast: [''],
      releaseDate: [null, Validators.required],
      trailers: [''],
      photos: [''],
      rating: [''],
      duration: [''],
      language: [''],
      genre: ['', Validators.required],
    });
    
  }
  
  addMovie(){
    this.movieService.addMovie(this.movie).subscribe(data =>{
      console.log('Sending to API:', this.movie);
      console.log('Response from API:', data);
    },
    error =>console.log(error)
  );
  }

  //method for add movie
  openAddMovieForm(){
    this.isAddMovieFormVisible = true;
  }
  
  closeAddMovieForm(){
    this.isAddMovieFormVisible = false;
  }


  movie: Movie = new Movie();

  
  onSubmit(){
    this.movie = this.movieForm.value;
     console.log('Data to be sent:', this.movie);

    this.addMovie();
  }
  

}
