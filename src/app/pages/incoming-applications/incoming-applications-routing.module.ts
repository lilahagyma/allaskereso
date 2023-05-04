import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomingApplicationsComponent } from './incoming-applications.component';

const routes: Routes = [{ path: '', component: IncomingApplicationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomingApplicationsRoutingModule { }
