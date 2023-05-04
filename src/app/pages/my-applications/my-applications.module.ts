import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyApplicationsRoutingModule } from './my-applications-routing.module';
import { MyApplicationsComponent } from './my-applications.component';


@NgModule({
  declarations: [
    MyApplicationsComponent
  ],
  imports: [
    CommonModule,
    MyApplicationsRoutingModule
  ]
})
export class MyApplicationsModule { }
