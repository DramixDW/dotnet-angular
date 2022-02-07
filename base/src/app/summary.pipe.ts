import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    return value.substring(args[0], args[1]);
  }

}


/*
  Créez votre pipe
    MovieTitle

    Rajouter une majuscule à chaque première lettre d'un mot
    sauf si c'est du,de,da,des,le,la,les,

    la planéte des bananes => La Planéte des Bananes

*/