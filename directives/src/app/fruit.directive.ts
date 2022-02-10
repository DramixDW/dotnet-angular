import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFruit]'
})
export class FruitDirective {

  constructor(element: ElementRef) {
    element.nativeElement.innerHTML = "C'est la fête des fruits";
  }

}
