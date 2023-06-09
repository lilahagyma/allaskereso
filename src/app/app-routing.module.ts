import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
import { LoggedInGuard } from './shared/logged-in.guard';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: 'full'},
  { path: "register", redirectTo: "seeker/register", pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),  canActivate: [LoggedInGuard] },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),  canActivate: [AuthGuard] },
  { path: 'seeker/register', loadChildren: () => import('./pages/register-seeker/register-seeker.module').then(m => m.RegisterSeekerModule), canActivate: [LoggedInGuard] },
  { path: 'seeker/profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard] },
  { path: 'employer/offers', loadChildren: () => import('./pages/my-jobs/my-jobs.module').then(m => m.MyJobsModule), canActivate: [AuthGuard] },
  { path: 'employer/new-job', loadChildren: () => import('./pages/new-job/new-job.module').then(m => m.NewJobModule), canActivate: [AuthGuard] },
  { path: 'employer/register', loadChildren: () => import('./pages/register-employer/register-employer.module').then(m => m.RegisterEmployerModule), canActivate: [LoggedInGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
