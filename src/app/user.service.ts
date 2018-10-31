import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
@Injectable()
export class UserService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  // isLoggedIn: any;

  constructor() {
  }
  setUserLoggedIn() {
    this.isLoggedIn.next(true);

  }
  setUserLoggedOut() {
    localStorage.removeItem('User');
    this.isLoggedIn.next(false);
  }

  checkLogin(): Observable<any> {
    let currentUser = localStorage.getItem('User');
    if (currentUser)
      this.isLoggedIn.next(true);
    else
      this.isLoggedIn.next(false);
      
    return this.isLoggedIn;      
  }
  // getLoggedinUser(){

  // }

}
