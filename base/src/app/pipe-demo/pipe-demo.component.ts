import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
  title: string = "Mon SuPEr tITre dE fiLM. la sUITe";
  amount: number = 5;
  today: number = Date.now();
  description: string = "Ma description pas trop longue mais un peu quand même parce que sinon, on ne verrai pas la différence";

  constructor() { }

  ngOnInit(): void {
  }

}
