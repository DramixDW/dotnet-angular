import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  

  constructor() { }

  getMovies() {
    return ['Forrest Gump', 'Alice au pays des merveilles', 'L\'attaque des bananes martiennes'];
  }
}
