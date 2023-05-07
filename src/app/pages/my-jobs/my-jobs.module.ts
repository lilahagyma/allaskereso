import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyJobsRoutingModule } from './my-jobs-routing.module';
import { MyJobsComponent } from './my-jobs.component';
import { NavbarComponent } from 'src/app/partials/navbar/navbar.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    MyJobsComponent
  ],
  imports: [
    CommonModule,
    MyJobsRoutingModule,
    NavbarComponent,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MyJobsModule { }
