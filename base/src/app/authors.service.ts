import { Injectable } from '@angular/core';

export interface Author {
  name: string;
  book: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getAuthors(): Author[] {
    return [
     {
       name: 'Daniel Defoe',
       book: 'Robinson crusoé'
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
  };
}
