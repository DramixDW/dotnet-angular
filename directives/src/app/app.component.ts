import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'di';
  isShown: boolean = false;
  viewMode: string = 'banana';
  viewModeList: string = 'list';
  courses: string[] = ['Angular', 'React', 'MySql'];

  addCourse() {
    this.courses.push('new course');
  }

  removeCourse() {
    this.courses.pop()
  }
}

/* 
  Dans un nouveau projet angular
  Gestionnaire de collection

  3 bouttons: 'Film', 'Livres', 'Vin'

  appuyer sur un bouton affiche la collection correspondante
  Dans chacune de ses liste:
    S'il n'y a pas d'élément, alors on affiche un message pour le mentionner
    Possibilité de cliquer sur un élément de la liste pour le sélectionner
      selectionné l'élément change sa background-color
    une fois qu'un élément est sélectionné,
      un boutton supprimer l'élément selectionné
        =>  au click retire l'élément sélectionné de la liste

        

*/
