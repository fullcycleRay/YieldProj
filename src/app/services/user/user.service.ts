import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
@Injectable()
export class UserService {
  isLoggedIn = new BehaviorSubject<boolean>(false);

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
    const currentUser = localStorage.getItem('User');
    if (currentUser) {
      this.isLoggedIn.next(true);
    } else {
      this.isLoggedIn.next(false);
    }
    return this.isLoggedIn;
  }
  getCurrentUser () {
    return localStorage.getItem('name');
  }
}
