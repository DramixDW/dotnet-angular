import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array-exemple',
  templateUrl: './form-array-exemple.component.html',
  styleUrls: ['./form-array-exemple.component.css']
})
export class FormArrayExempleComponent implements OnInit {
  form!: FormGroup;
  form2 = new FormGroup({
    topics: new FormArray([]),
  })

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      topics: fb.array([]),
    })
  }

  get Topics() {
    return this.form2.get('topics') as FormArray ?? { controls: null};
  }

  ngOnInit(): void {
  }
  
  addTopic(value: string) {
    this.Topics.push(new FormControl(value, Validators.required));
  }

}
