import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-investor-account',
  templateUrl: './create-investor-account.component.html',
  styleUrls: ['./create-investor-account.component.scss','../app.component.scss','../font-awesome/css/font-awesome.min.css']
})
export class CreateInvestorAccountComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  createIndAcc(e){
    var legalFirstName = e.target.elements[0].value.toLowerCase();
    var LegalSecondName = e.target.elements[1].value.toLowerCase();
    var primaryAdd = e.target.elements[2].value.toLowerCase();
    var dateOfBirth =e.target.elements[3].value;
    var socialSecurityNum =e.target.elements[4].value;
    var certifyCheckbox = e.target.elements[5].value;

  }
  cancelInv = function(){
    this.router.navigate(['manageaccount']); 
  }
  chageAcc = function(){
    this.router.navigate(['selectivestor']); 
  }

}
