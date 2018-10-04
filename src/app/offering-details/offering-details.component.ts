import { Component, OnInit } from '@angular/core';
import {OfferingDetailsService} from '../offering-details.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-offering-details',
  templateUrl: './offering-details.component.html',
  styleUrls: ['./offering-details.component.scss']
})
export class OfferingDetailsComponent implements OnInit {
  resp: any;
  offeringResp: any;

  constructor(private router:Router,private offeringDetails:OfferingDetailsService) { }

  ngOnInit() {
    this.getOfferingDetails();
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

}
