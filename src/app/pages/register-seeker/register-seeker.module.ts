import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterSeekerRoutingModule } from './register-seeker-routing.module';
import { RegisterSeekerComponent } from './register-seeker.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterSeekerComponent
  ],
  imports: [
    CommonModule,
    RegisterSeekerRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegisterSeekerModule { }
