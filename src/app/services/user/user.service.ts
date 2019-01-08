import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
    localStorage.removeItem('name');
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
  getAuthToken () {
    const currentUser = localStorage.getItem('User');
    if (currentUser) {
      return currentUser;
    }
  }
}
