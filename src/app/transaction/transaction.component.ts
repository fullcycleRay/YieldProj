import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss','./reactTooltip.scss','../viewportfolio/viewportfolio.component.scss' ,'../app.component.scss','../font-awesome/css/font-awesome.min.css']
})
export class TransactionComponent implements OnInit {
  isClicked = false;

  constructor() { }

  ngOnInit() {
    this.isClicked = false;

  }
  showHide(){
    this.isClicked=!(this.isClicked);
  }

}
