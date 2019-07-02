import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.scss'],
})
export class ViewScheduleComponent implements OnInit {

  @Input() value:any;
  constructor() { }

  ngOnInit() {}

}
