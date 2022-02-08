import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reusable-component';
}

/*
  Créer un component Zippy

  une petite carte avec en-tête
  en-tête: titre + button
  titre: texte qu'on va donner à l'élèment via un attribut
  boutton: déplier notre élement zippy
  une fois déplié ce qu'il va afficher un élément/html

  étât déplié, c'est un étât qui peut lui être communiqué
  à chaque fois qu'on appuie sur le boutton, émettre un événement
  et on affiche un message dans la console pour dire si notre zippy
  vient d'être plié ou déplié 
*/