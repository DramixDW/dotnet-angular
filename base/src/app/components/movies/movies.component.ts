import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movieTitle: string = "Alice au pays des merveilles"; 
  declare movies: string[];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
  }

  getMovies() {
    return this.movieService.getMovies();
  }
  getMovieTitle() {
    return this.movieTitle;
  }

}

/*
   - Composant auteur
   - Service auteur


   [
     {
       name: 'Daniel Defoe',
       book: 'Robinson crusoé
     },
     {
       name: 'Douglas adams',
       book: 'h2g2'
     },
     {
       name: 'Auteur inconnu',
       book: 'Un livre pas connu, non plus'
     }
   ]
   <p> son nom </p>
   <p> le titre d'un livre qu'il a fait</p>
*/