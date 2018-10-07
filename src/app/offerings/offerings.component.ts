import { Component, OnInit } from '@angular/core';
import {OfferingDetailsService} from '../offering-details.service';
import {Router} from '@angular/router';

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
  resp: any;
  offeringResp: any;
  pastOfferings = [];
  upcomingOfferings=[];
  openOfferings=[];
  constructor(private router:Router,private offeringDetails:OfferingDetailsService) { 
  this.isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
  this.userId = localStorage.getItem('usedId');
  }

  ngOnInit() {
    this.getOfferingDetails();
    this.offeringDataExc();
  }
  getOfferingDetails(): void {
    this.offeringDetails.getOfferingData()
      .subscribe(
        resp => {
          this.offeringResp = resp;
          console.log(this.offeringResp);
        }
      )
  }
  offeringDataExc(): void {
    debugger
    if(this.offeringResp){
      for( var i =0; i< this.offeringResp.services.open.length; i++)
      {
       this.openOfferings[i] =this.offeringResp.services.open[i]; 
      }
      for(var j =0; j< this.offeringResp.services.past.length; j++){
        this.pastOfferings[j] = this.offeringResp.services.past[j];
      }
      for(var z =0; z< this.offeringResp.services.upcoming.length; z++){
        this.upcomingOfferings[z] = this.offeringResp.services.upcoming[z]
      }
    }
  }

}
