import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.scss','../app.component.scss']
})
export class OfferingsComponent implements OnInit {
  isUserLoggedIn;
  userId;
  offeringTitle ="";
  offeringDesc ="";
  constructor() { 
  this.isUserLoggedIn = sessionStorage.getItem('isUserLoggedIn');
  this.userId = sessionStorage.getItem('usedId');
  }

  ngOnInit() {

  }

}
