import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let authLevel = localStorage.getItem('authLevel')
      if (!authLevel)
        return false;

      if (parseInt(authLevel) > 0) {
        alert('Már be vagy jelentkezve.');
        this.router.navigate(['home']);
      }
      return true;
  }
}
