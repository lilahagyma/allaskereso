import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: 'full' },
  { path: "register", redirectTo: "seeker/register", pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'seeker/register', loadChildren: () => import('./pages/register-seeker/register-seeker.module').then(m => m.RegisterSeekerModule) },
  { path: 'seeker/profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'employer/home', loadChildren: () => import('./pages/my-jobs/my-jobs.module').then(m => m.MyJobsModule) },
  { path: 'employer/new-job', loadChildren: () => import('./pages/new-job/new-job.module').then(m => m.NewJobModule) },
  { path: 'employer/register', loadChildren: () => import('./pages/register-employer/register-employer.module').then(m => m.RegisterEmployerModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
