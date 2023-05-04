import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterSeekerRoutingModule } from './register-seeker-routing.module';
import { RegisterSeekerComponent } from './register-seeker.component';


@NgModule({
  declarations: [
    RegisterSeekerComponent
  ],
  imports: [
    CommonModule,
    RegisterSeekerRoutingModule
  ]
})
export class RegisterSeekerModule { }
