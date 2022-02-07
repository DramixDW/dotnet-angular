import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieTitle'
})
export class MovieTitlePipe implements PipeTransform {

  uppercaseFirstLetter(value: string) {
    return `${value[0].toUpperCase()}${value.substring(1, value.length)}`
  }

  transform(value: string, ...args: unknown[]): string {
    const bannedWords = ['du', 'de', 'des', 'le', 'la', 'les'];
    let words = value.split(' ');
    const points = ['.', '!', '?'];
    //on applique les modifications nécessaire à chaque 'mot' de notre phrase
    words = words.map((word, index) => {
      word = word.toLowerCase();
      if (bannedWords.includes(word) && index !== 0 && !points.includes(words[index-1][words[index-1].length-1])) {
        return word;
      } else {
        return this.uppercaseFirstLetter(word);
      }
    });
    return words.join(' ');
  }

  /*
    Créer un composant favori

     titre/nom + button => toggle favori (click: pas favori => favori et si favori => pas favori)
     si favori alors background-color = yellow

  */

     
}
