import { Component, OnInit } from '@angular/core';
import { OfferingDetailsService } from '../../services/offering-detail/offering-details.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UserService} from '../../services/user/user.service';
import {AppConfig} from '../../../environments/config';

const API_URL = environment.yieldUrl;

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.scss', '../../app.component.scss']
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
  offerRemPer: any;

  constructor(private http: HttpClient, private router: Router, private offeringDetails: OfferingDetailsService,
    private userService: UserService, public appConfig: AppConfig) {
  }

  ngOnInit() {
    this.appConfig.setLoader(true);
    this.userService.checkLogin().subscribe(
      resp => {
        this.isUserLoggedIn = resp;
      }
    );
    this.getOfferingDetails();
  }
  // tslint:disable-next-line:use-life-cycle-interface
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
          // console.log(this.offeringResp, this.dateNow.getTime());
          this.offeringDataExc();
          this.appConfig.setLoader(false);
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

calculatePercentage = (openOffer) => {
  const investedAmount = openOffer.invested_amount == null  ? 0 : openOffer.invested_amount;
  return (openOffer.required_capital - investedAmount) * 100 / (openOffer.required_capital);
}

subSectionLoad(e, subSectionLoad) {
  if (e.target.classList.contains(subSectionLoad)) {
      e.preventDefault();
  }
}
routeOfferingDetail(uid) {
this.offeringDetails.setNonActiveFlag({ uid: uid, flag: true});
this.router.navigate(['/offering-detail/' + uid]);
}

}
