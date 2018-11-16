import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-manual-account-step2',
  templateUrl: './manual-account-step2.component.html',
  styleUrls: ['./manual-account-step2.component.scss', '../../app.component.scss',
               '../../viewportfolio/viewportfolio.component.scss']
})
export class ManualAccountStep2Component implements OnInit {
  currentUser: any;

  constructor( private user: UserService) { }

  ngOnInit() {
    this.currentUser = this.user.getCurrentUser();
  }

}
