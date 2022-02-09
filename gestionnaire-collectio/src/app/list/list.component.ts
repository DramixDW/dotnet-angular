import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list!: string[];
  @Input() title: string = 'Titre de base';
  selected!: number;

  constructor() { }

  ngOnInit(): void {
  }

  selectElem(index: number) {
    this.selected = index;
  }

  deleteElem() {
    this.list.splice(this.selected, 1);
    this.selected = -1;
  }

  addElem(input: HTMLInputElement) {
    this.list.push(input.value);
    input.value = '';
  }

}
