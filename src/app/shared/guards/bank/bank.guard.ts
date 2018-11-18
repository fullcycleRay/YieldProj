import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BankAccountService } from '../../../services/bank-account/bank-account.service';

@Injectable({
  providedIn: 'root'
})
export class BankGuard implements CanActivate {
  bankListResp: any;
  bankAccountData: any;
  constructor(private bankAccList: BankAccountService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     return this.getBankAccList();
  }
  getBankAccList(): any {
    this.bankAccList.getBankAccList()
      .then(
        resp => {
          debugger
          this.bankListResp = resp;
          if (this.bankListResp.success === true) {
            this.bankAccountData = this.bankListResp.data;
            if (this.bankAccountData) {
              this.router.navigate(['/new-account-step-2']);
              return false;
            } else {
              return true;
            }
          } else if (this.bankListResp.success === false) {
            alert ('Something went wrong, Unable to fetch bank accounts');
            return false;
          }
        }
      );
  }
}
