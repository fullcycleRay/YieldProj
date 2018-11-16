import { Component, OnInit } from '@angular/core';
import {OriginatorService} from '../services/originator/originator.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-originator',
  templateUrl: './originator.component.html',
  styleUrls: ['./originator.component.scss', '../app.component.scss']
})
export class OriginatorComponent implements OnInit {
  originatorData: any;
  oid: any;
  offeringData: any;
  description: any;
  display_name: any;
  headline: any;
  retOid: any;
  today: any;
  constructor(private originator: OriginatorService, private route: ActivatedRoute) {
    this.route.params
    .subscribe(
      params => {
        this.oid = params;
      } );
   }

  ngOnInit() {
    this.getOriginator();
  }

  getOriginator(): void {
    this.originator.getOriginatorData(this.oid.oid)
    .then(
      resp => {
        this.originatorData = resp;
        this.extractOriginatorData();
      }
    );
  }
  extractOriginatorData() {
    this.description = this.originatorData.service.description;
    this.display_name = this.originatorData.service.display_name;
    this.headline = this.originatorData.service.headline;
    this.offeringData = this.originatorData.service.offerings;
    this.retOid = this.originatorData.service.uid;
  }
}
