import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {SignupService} from'../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss','../app.component.scss','../font-awesome/css/font-awesome.min.css','./card.scss']
})
export class SignupComponent implements OnInit {  
  constructor(private router:Router,private signUp:SignupService) { }
  firstNameError = false;
  anyError = false;
  lastNameError = false;
  emailError = false;
  userAlreadyExist = false;
  eMail="";
  restItems: any;
  resp: any;
  err: any;

  ngOnInit() {
  
  }
  getRestItems(fName,uId,pWord): void {
    this.signUp.getAllData(fName,uId, pWord)
      .subscribe(
        resp => {
          this.restItems = resp;
          console.log(this.restItems);
        },
        err => {
          console.log("Error occured");
        }
      )
  }

  emailPattern(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  signUpUser(e){
    var fName = e.target.elements[0].value;
    var lName = e.target.elements[1].value;
    this.eMail = e.target.elements[2].value.toLowerCase();
    let currentUrl = this.router.url;
    this.anyError = false;
    this.firstNameError=false; 
    this.lastNameError=false;
    this.emailError=false;
    this.userAlreadyExist = false;
    // console.log(fName,lName,this.eMail,currentUrl);
    this.getRestItems(fName,this.eMail,lName);
    if(fName=="" || fName.length<2)
    {
      this.anyError = true;
      this.firstNameError=true; 
    }
    if(lName=="" || lName.length<2)
    {
      this.anyError = true;
      this.lastNameError=true;
    }
    if(this.eMail=="" || !(this.emailPattern(this.eMail)))
    {
      this.anyError = true;
      this.emailError=true;
    }
    if(this.restItems.success == false && this.restItems.message =="Validation failed: Email has already been taken")
    {
      this.userAlreadyExist = true;
    }
    if(this.restItems.success == true)
    {
      localStorage.setItem('User', this.restItems.user);
      this.router.navigate(['offerings']);
    }

  }
  

}
