import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  temperatureRange: any = {
    start: 92.7,
    behaviour: 'drag',
    connect: 'lower',
    direction: 'ltr',
    tooltips: [true],

    range: {
      min: 92,
      max: 104
    },
  
    pips: {
      mode: 'values', //there were too much pips to see anything
      values: [92,  94, 96, 98, 100, 102, 104],
      density:8
    },
    
  };
}
