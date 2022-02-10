import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BananeService {

  constructor() { }

  sayBananaPlz() {
    console.log('banane')
  }
}
