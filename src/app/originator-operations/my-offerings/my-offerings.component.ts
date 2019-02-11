import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-offerings',
  templateUrl: './my-offerings.component.html',
  styleUrls: ['./my-offerings.component.scss']
})
export class MyOfferingsComponent implements OnInit {

  model: any = {
    offerings: {
      active:
      [
        {
          name: 'raise capital',
          term: '20',
          rate: '2',
          start_date: '12/1/19',
          end_date: '12/12/19',
          required_cap: '20000',
          capital_acquired: '1000'
        }

      ],
      inactive:
      [
        {
        name: 'raise capital',
        term: '20',
        rate: '2',
        start_date: '12/1/19',
        end_date: '12/12/19',
        required_cap: '20000',
        capital_acquired: '1000'
        }
      ]
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
