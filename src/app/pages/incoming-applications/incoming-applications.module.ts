import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomingApplicationsRoutingModule } from './incoming-applications-routing.module';
import { IncomingApplicationsComponent } from './incoming-applications.component';


@NgModule({
  declarations: [
    IncomingApplicationsComponent
  ],
  imports: [
    CommonModule,
    IncomingApplicationsRoutingModule
  ]
})
export class IncomingApplicationsModule { }
