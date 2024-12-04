import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { map, Observable } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
 

  private baseUrl="http://localhost:8082/movie";

  constructor(private httpClient: HttpClient) { }

  addMovie(movie: Movie):Observable<any>{
    // return this.httpClient.post(`${this.baseUrl}`,movie)

    let params = new HttpParams()
      .set('title', movie.title)
      .set('description', movie.description)
      .set('cast', movie.cast || '')  
      .set('releaseDate', movie.releaseDate ? movie.releaseDate.toISOString() : '')  
      .set('trailers', movie.trailers || '')
      .set('photos', movie.photos || '')
      .set('rating', movie.rating || '')
      .set('duration', movie.duration || '')
      .set('language', movie.language || '')
      .set('genre', movie.genre);

    // Make the GET or POST request with query parameters
    return this.httpClient.post(`${this.baseUrl}/addMovie`, null, { params: params });
  }

  
  getMovieLists(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/getMovieLists`).pipe(map((response: any)=>
    response.data));
  }
}
