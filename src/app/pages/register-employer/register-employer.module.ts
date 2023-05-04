import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterEmployerRoutingModule } from './register-employer-routing.module';
import { RegisterEmployerComponent } from './register-employer.component';


@NgModule({
  declarations: [
    RegisterEmployerComponent
  ],
  imports: [
    CommonModule,
    RegisterEmployerRoutingModule
  ]
})
export class RegisterEmployerModule { }
