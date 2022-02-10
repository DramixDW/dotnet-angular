import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormArrayExempleComponent } from './form-array-exemple/form-array-exemple.component';
import { NewPasswordFormComponent } from './new-password-form/new-password-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseFormComponent,
    SignupFormComponent,
    FormArrayExempleComponent,
    NewPasswordFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
