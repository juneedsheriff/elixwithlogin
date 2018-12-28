import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pulserate',
  templateUrl: './pulserate.component.html',
  styleUrls: ['./pulserate.component.css']
})
export class PulserateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  pulserateRange: any = {
    start: 80,
    behaviour: 'drag',
    connect: 'lower',
    direction: 'ltr',
    tooltips: [true],

    range: {
      min: 60,
      max: 110
    },
  
    pips: {
      mode: 'values', //there were too much pips to see anything
      values: [60,  70, 80, 90, 100, 110 ],
      density:8
    },
    
  };
}
