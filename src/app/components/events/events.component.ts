import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  date14: Date;

  constructor() {
    this.date14 = new Date();
  }
  ngOnInit() {
  }

}
