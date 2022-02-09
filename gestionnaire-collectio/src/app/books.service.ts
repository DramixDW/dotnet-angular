import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks() {
    return ['Robinson crusoé', 'Billy Bat', 'Les chevaliers d\'émeraude']
  }
}
