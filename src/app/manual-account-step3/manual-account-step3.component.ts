import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-manual-account-step3',
  templateUrl: './manual-account-step3.component.html',
  styleUrls: ['./manual-account-step3.component.scss', '../app.component.scss',
              '../font-awesome/css/font-awesome.min.css', '../viewportfolio/viewportfolio.component.scss']
})
export class ManualAccountStep3Component implements OnInit {
  currentUser: any;

  constructor( private user: UserService) { }

  ngOnInit() {
    this.currentUser = this.user.getCurrentUser();
  }

}
