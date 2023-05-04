import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterEmployerRoutingModule } from './register-employer-routing.module';
import { RegisterEmployerComponent } from './register-employer.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterEmployerComponent
  ],
  imports: [
    CommonModule,
    RegisterEmployerRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegisterEmployerModule { }
