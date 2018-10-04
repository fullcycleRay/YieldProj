import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private eMail;
  private fName;
  private lName;


  constructor() {
    this.isUserLoggedIn.next(false);
   }
   setUserLoggedIn() {
     this.isUserLoggedIn.next(true);
   }
   getUserLoggedIn() {
     return this.isUserLoggedIn;
   }
   setUserLoggedOut() {
    this.isUserLoggedIn.next(false);
   }

}
