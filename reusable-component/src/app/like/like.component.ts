import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  //nom entre paranthèses = nom de l'attribut sur notre composant
  @Input('nbr') nbrLike!: number;
  @Input('liked') isLiked!: boolean;
  @Output('likeChanged') likeChanged = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  like() {
    if (!this.isLiked) {
      this.nbrLike++;
      this.isLiked = true;
      this.likeChanged.emit({
        content: 'banane',
        author: 'Maitre banane'
      });
    }
  }

  dislike() {
    if (this.isLiked !== false) {
      this.nbrLike--;
      this.isLiked = false;
      this.likeChanged.emit(false);
    }
  }

}
