import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayExempleComponent } from './form-array-exemple.component';

describe('FormArrayExempleComponent', () => {
  let component: FormArrayExempleComponent;
  let fixture: ComponentFixture<FormArrayExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArrayExempleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArrayExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
