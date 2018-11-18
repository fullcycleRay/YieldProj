import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InvestmentGuard implements CanActivate {
  offeringUid: any;
  offeringArray: any;
  constructor (private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.offeringArray = JSON.parse(localStorage.getItem('offering'));
      if (this.offeringArray && this.offeringArray.uid === next.params.id) {
        return true;
      } else {
        this.router.navigate(['/offerings']);
        return false;
      }

  }
}
