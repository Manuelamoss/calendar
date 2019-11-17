import { Component, ViewChild, Input, ViewEncapsulation, OnInit, HostListener } from '@angular/core';
import { MatDatepicker } from '@angular/material';

import { element } from 'protractor';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class CalendarComponent { 
  

 @ViewChild(MatDatepicker, {static: false}) datepicker: MatDatepicker<Date>;
 jan = new Date(2019, 0, 1);
 fev = new Date(2019, 1, 1);
 mar = new Date(2019, 2, 1);
 apr = new Date(2019, 3, 1);

 @Input() header:any = null;
 

 myFilter = (d: Date) => {
  const day = d.getDay();
  // Prevent Saturday and Sunday from being selected.
  
  //return day !== 0 && day !== 6 ? undefined :  'example-custom-date-class';
if (day == 0){
  return 'example-custom-date-class';
}
if (day == 6){
return 'example-custom-date-class1';
}

  }
  // bank holidays reference varible of datepicker input
 


}



 

