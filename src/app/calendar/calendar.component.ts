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

 @Input() header:any = null;
 

 myFilter = (d: Date) => {
  const day = d.getDay();
  // Prevent Saturday and Sunday from being selected.
  return day !== 0 && day !== 6 ? undefined :  'example-custom-date-class';
  }
  // local reference varible of datepicker input


// listen to document click event and handle closeDponOutsideClick event
/*@HostListener('window:click', ['$event'])
closeDponOutsideClick(event) {
if (event.target.offsetParent !== null && event.target.offsetParent.viewClassName !== 'cdk-overlay-backdrop mat-overlay-transparent-backdrop cdk-overlay-backdrop-showing') {
this.datepicker.open();
  }
this.datepicker.open();
}*/
}



 

