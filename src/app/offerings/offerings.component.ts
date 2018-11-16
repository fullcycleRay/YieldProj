import { Component, OnInit } from '@angular/core';
import { OfferingDetailsService } from '../offering-details.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UserService} from '../user.service';

const API_URL = environment.yieldUrl;

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.scss', '../app.component.scss']
})
export class OfferingsComponent implements OnInit {
  userId: any;
  offeringTitle = '';
  offeringDesc = '';
  resp: any;
  offeringResp: any;
  pastOfferings = [];
  upcomingOfferings = [];
  openOfferings = [];
  loading = true;
  dateNow: Date = new Date();
  isUserLoggedIn: Observable <boolean>;

  constructor(private http: HttpClient, private router: Router, private offeringDetails: OfferingDetailsService,
    private userService: UserService) {
  }

  ngOnInit() {
    this.getOfferingDetails();
    this.loading = false;
    this.userService.checkLogin().subscribe(
      resp => {
        this.isUserLoggedIn = resp;
      }
    );
  }
  ngAfterContentChecked() {
    this.userService.checkLogin().subscribe(
      resp => {
        this.isUserLoggedIn = resp;
      }
    );
  }
  getOfferingDetails(): void {
    this.offeringDetails.getOfferingData()
      .then(
        resp => {
          this.offeringResp = resp;
          console.log(this.offeringResp, this.dateNow.getTime());
          this.offeringDataExc();
        }
      );
  }

  offeringDataExc(): void {
    if (this.offeringResp) {
      for (let i = 0; i < this.offeringResp.services.open.length; i++) {
        this.openOfferings[i] = this.offeringResp.services.open[i];
      }
      for (let j = 0; j < this.offeringResp.services.past.length; j++) {
        this.pastOfferings[j] = this.offeringResp.services.past[j];
      }
      for (let z = 0; z < this.offeringResp.services.upcoming.length; z++) {
        this.upcomingOfferings[z] = this.offeringResp.services.upcoming[z];
      }
    }
    if (!(this.openOfferings.length)) {
      this.openOfferings.length = 0;
    }
    if (!(this.pastOfferings.length)) {
      this.pastOfferings.length = 0;
    }
    if (!(this.upcomingOfferings.length)) {
      this.upcomingOfferings.length = 0;
    }

  }

}
