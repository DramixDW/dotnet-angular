import { Component, OnInit } from '@angular/core';
import { Author, AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(private authorService: AuthorsService) { }

  ngOnInit(): void {
  }

  getAuthors(): Author[] {
    return this.authorService.getAuthors();
  }

}
