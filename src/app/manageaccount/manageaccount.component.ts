import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-manageaccount',
  templateUrl: './manageaccount.component.html',
  styleUrls: ['./manageaccount.component.scss', '../app.component.scss', '../font-awesome/css/font-awesome.min.css']
})
export class ManageaccountComponent implements OnInit {

  constructor(private router: Router, private user: UserService) { }

  ngOnInit() {
  }
  setupAcc = function() {
    this.router.navigate(['createaccount']);

  };
  selecInv = function() {
    this.router.navigate(['selectivestor']);
  };


}
