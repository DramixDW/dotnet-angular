import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidator } from './username.validator';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
   form = new FormGroup({
     usernameControl: new FormControl('', [
       Validators.required,
       Validators.maxLength(15),
       UsernameValidator.cannotContainSpace ],
       ),
     passwordControl: new FormControl()   
   })

  // form = new FormGroup({
  //   account: new FormGroup({
  //     usernameControl: new FormControl('', [
  //       Validators.required,
  //       Validators.maxLength(15),
  //       UsernameValidator.cannotContainSpace ],
  //       ),
  //     passwordControl: new FormControl()   
  //   })
  // })

  get UsernameControl() {
    //ateindre un formControl dans un formGroup
    // .get(nomDuGroupe.nomDuControl)
    // plus entouré les champs dans une div avec un attribut formGroupName dont la valeur
    // est le nom du formGroup
    return this.form.get('usernameControl');
  }

  get Banane() {
    return 'banane';
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form);
  }

}

/*
  Créer un formulaire de changement de mot de passe
    3 champs
      password: validatorAsynchron pour vérifier que le mot de passe correspond.
                Un message sera affiché le temps qu'il simule une recherche dans la base de données
                 vérifier === banane
      newPassword: requis, longueur minimum de 5 charactères
      confirmNewPassword: vérifie que sa valeur est égale à celle du newPassword
*/
