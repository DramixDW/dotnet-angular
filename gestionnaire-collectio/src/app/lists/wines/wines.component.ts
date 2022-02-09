import { Component, OnInit } from '@angular/core';
import { WinesService } from 'src/app/wines.service';

@Component({
  selector: 'app-wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.css']
})
export class WinesComponent implements OnInit {
  wines!: string[];
  constructor(wineService: WinesService) {
    this.wines = wineService.getWines();
  }

  ngOnInit(): void {
  }

}
