import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserSessionGuard implements CanActivate {
  prevPage: any;
  constructor (private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.prevPage = localStorage.getItem('pageVisitedWithoutLogin');
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
          localStorage.setItem('pageVisitedWithoutLogin', state.url);
          this.router.navigate(['/login']);
          return false;
        }
      }
  }
}
