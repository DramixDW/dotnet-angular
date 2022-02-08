import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  updateLike(liked: boolean, nbr: number, text: string) {
    console.log(nbr);
    console.log(text);
    console.log('liked', liked);
    console.log('Une fléche a été cliqué \\o/')
  }

}
