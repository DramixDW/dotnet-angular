import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies!: string[];

  constructor(movieService: MoviesService) {
    this.movies = movieService.getMovies();
  }

  ngOnInit(): void {
  }

}
