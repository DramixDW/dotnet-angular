import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies() {
    return ['Die hard', 'Kill bill', 'Pulp Fiction'];
  }
}
