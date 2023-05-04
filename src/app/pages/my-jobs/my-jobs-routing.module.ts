import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyJobsComponent } from './my-jobs.component';

const routes: Routes = [{ path: '', component: MyJobsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyJobsRoutingModule { }
