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
    id: 0,
    name: 'development'
  }, {
    id: 1,
    name: 'art'
  }, {
    id: 2,
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
