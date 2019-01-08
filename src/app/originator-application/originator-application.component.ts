import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-originator-application',
  templateUrl: './originator-application.component.html',
  styleUrls: ['./originator-application.component.scss', '../app.component.scss']
})
export class OriginatorApplicationComponent implements OnInit {

  model: any = {};

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(JSON.stringify(this.model));
  }

}
