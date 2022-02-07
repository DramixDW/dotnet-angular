import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  imgUrl: string = 'https://picsum.photos/400/200';
  paragraphClass = 'voyant';
  isActive: boolean = false;
  isHidden: boolean = true;
  emailExample: string = "info@example.be"

  constructor() { }

  ngOnInit(): void {
  }

  sayHello(event: Event) {
    //empêche l'événement onClick de la div de se déclencher
    event.stopPropagation();
    console.log('Bonjour peuple du console.log o/', event);
  }

  onSave(input: HTMLInputElement) {
    console.log(this.emailExample);
    console.log(input.value);
  }

  clickDiv() {
    console.log('la div a été cliqué');
  }
}
