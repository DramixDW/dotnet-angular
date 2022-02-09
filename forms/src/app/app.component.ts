import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  satisfactions = [
    {
      nbrValue: 1,
      name: 'Pas terrible'
    },
    {
      nbrValue: 2,
      name: 'Pas mal, franchement !'
    },
    {
      nbrValue: 3,
      name: 'IN-CROY-ABLE !'
    }
  ]
  startValue = '11:30';

  contactMethod = [
    {
      id: 1,
      name: 'Email'
    },
    {
      id: 2,
      name: 'Phone'
    },
    {
      id: 3,
      name: 'F-A-X'
    }
  ]

  submit(form: NgForm) {
    console.log(form)
  }

  showFirstname(input: NgModel) {
    console.log(input);
  }

  resetTimer() {
    this.startValue = '09:00';
  }
}
