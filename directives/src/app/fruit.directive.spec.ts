import { ElementRef } from '@angular/core';
import { FruitDirective } from './fruit.directive';

describe('FruitDirective', () => {
  it('should create an instance', () => {
    const div = document.createElement('div');
    const divE = new ElementRef(div);
    const directive = new FruitDirective(divE);
    expect(directive).toBeTruthy();
  });
});
