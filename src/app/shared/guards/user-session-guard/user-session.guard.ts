import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserSessionGuard implements CanActivate {
  constructor (private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (localStorage.getItem('User')) {
        if ((state.url === '/signup' || state.url === '/login' || state.url === '/originator-application')) {
          this.router.navigate(['/offerings']);
          return false;
        } else {
          return true;
        }
      } else {
        if ((state.url === '/signup' || state.url === '/login' || state.url === '/originator-application')) {
          return true;
        } else {
          this.router.navigate(['/login']);
        return false;
        }
      }
  }
}
