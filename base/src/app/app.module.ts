import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { AuthorsComponent } from './authors/authors.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { FormsModule } from '@angular/forms';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { SummaryPipe } from './summary.pipe';
import { MovieTitlePipe } from './movie-title.pipe';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    AuthorsComponent,
    PropertyBindingComponent,
    PipeDemoComponent,
    SummaryPipe,
    MovieTitlePipe,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
