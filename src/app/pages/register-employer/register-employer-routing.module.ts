import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterEmployerComponent } from './register-employer.component';

const routes: Routes = [{ path: '', component: RegisterEmployerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterEmployerRoutingModule { }
