import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-investor-account',
  templateUrl: './select-investor-account.component.html',
  styleUrls: ['./select-investor-account.component.scss', '../app.component.scss', '../font-awesome/css/font-awesome.min.css']
})
export class SelectInvestorAccountComponent implements OnInit {
  testIfCheck = true;
  testvalue;

  constructor(private router: Router) { }

  ngOnInit() {
    this.testIfCheck = true;
  }

  anySelectedBox = function() {

  };
  checkIfChecKed(e) {
    if (e === 'on') {
      this.testvalue = false;
    } else {
      this.testvalue = true;
    }


  }
}
