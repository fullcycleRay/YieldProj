import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({name: 'getMonths'})
export class GetMonths implements PipeTransform {
  transform(value: string): string {
    const startDate = moment(value);
    const today = moment(new Date()).utc();
    let duration = moment.duration(today.diff(startDate)).asMonths();
    if (duration < 0) {
       duration = 0; 
    }
    return parseInt(duration.toString()).toString();
  }
}
