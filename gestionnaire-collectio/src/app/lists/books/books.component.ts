import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books!: string[];
  constructor(bookService: BooksService) {
    this.books = bookService.getBooks();
   }

  ngOnInit(): void {
  }

}
