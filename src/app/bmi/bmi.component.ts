import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  hfeetRange: any = {
    start: 0,
    behaviour: 'drag',
    connect: 'lower',
    direction: 'ltr',
    tooltips: [true],

    range: {
      min: 1,
      max: 8,
    },
  
    pips: {
      mode: 'values', //there were too much pips to see anything
      values: [1,  2, 3, 4, 5, 6, 7, 8 ],
      density:8
    },
    
  };
  hinchesRange: any = {
    start: 0,
    behaviour: 'drag',
    connect: 'lower',
    direction: 'ltr',
    tooltips: [true],

    range: {
      min: 0,
      max: 11,
    },
  
    pips: {
      mode: 'values', //there were too much pips to see anything
      values: [0,  3,  6,   9,   11 ],
      density:8
    },
    
  };
  weightRange: any = {
    start: 0,
    behaviour: 'drag',
    connect: 'lower',
    direction: 'ltr',
    tooltips: [true],

    range: {
      min: 0,
      max: 350,
    },
  
    pips: {
      mode: 'values', //there were too much pips to see anything
      values: [0, 50, 100, 150, 200, 250, 300, 350],
      density:8
    },
    
  };
}
