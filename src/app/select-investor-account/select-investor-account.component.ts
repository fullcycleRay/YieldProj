import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-investor-account',
  templateUrl: './select-investor-account.component.html',
  styleUrls: ['./select-investor-account.component.scss','../app.component.scss','../font-awesome/css/font-awesome.min.css']
})
export class SelectInvestorAccountComponent implements OnInit {
  testIfCheck =false;
  testvalue;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  canSel = function(){
    this.router.navigate(['manageaccount']);
  }
  anySelectedBox = function(){

  }
  checkIfChecKed(e){
    this.testvalue=e;

  }
}
