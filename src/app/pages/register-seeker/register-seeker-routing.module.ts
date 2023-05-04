import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterSeekerComponent } from './register-seeker.component';

const routes: Routes = [{ path: '', component: RegisterSeekerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterSeekerRoutingModule { }
