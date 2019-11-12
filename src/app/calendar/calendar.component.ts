import { Component, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent  {

 @ViewChild(MatDatepicker, {static: false}) datepicker: MatDatepicker<Date>;
 jan = new Date(2019, 0, 1);
 fev = new Date(2019, 1, 1);

 
}
