import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewJobRoutingModule } from './new-job-routing.module';
import { NewJobComponent } from './new-job.component';
import { NavbarComponent } from 'src/app/partials/navbar/navbar.component';


@NgModule({
  declarations: [
    NewJobComponent
  ],
  imports: [
    CommonModule,
    NewJobRoutingModule,
    NavbarComponent
  ]
})
export class NewJobModule { }
