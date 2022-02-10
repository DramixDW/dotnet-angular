import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  isSubmited: boolean = false;
  selectedCategory: number = 2;
  name = "cours de banane";
  categories = [{
    nbr: 0,
    name: 'development'
  }, {
    nbr: 2,
    name: 'art'
  }, {
    nbr: 1,
    name: 'sciences'
  }]
  constructor() { }

  ngOnInit(): void {
  }

  submit(f: NgForm) {
    this.isSubmited = true;
    this.name = "nom de cours plus classe";
  }
}
