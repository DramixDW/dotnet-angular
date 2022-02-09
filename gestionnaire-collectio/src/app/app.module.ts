import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { MoviesComponent } from './lists/movies/movies.component';
import { BooksComponent } from './lists/books/books.component';
import { WinesComponent } from './lists/wines/wines.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MoviesComponent,
    BooksComponent,
    WinesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
