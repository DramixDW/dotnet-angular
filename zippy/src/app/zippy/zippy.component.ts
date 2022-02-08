import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  @Input() title!: string;
  @Input() expanded: boolean = false;
  @Output('stateChanged') toggleState = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleExpanded() {
    this.expanded = !this.expanded;
    this.toggleState.emit(this.expanded);
  }

}
