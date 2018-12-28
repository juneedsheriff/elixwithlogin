import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randombloodsugar',
  templateUrl: './randombloodsugar.component.html',
  styleUrls: ['./randombloodsugar.component.css']
})
export class RandombloodsugarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

fastingRange: any = {
    start: 60,
    behaviour: 'drag',
    connect: 'lower',
    direction: 'ltr',
    tooltips: [true],

    range: {
      min: 40,
      max: 280
    },
  
    pips: {
      mode: 'values', //there were too much pips to see anything
      values: [40, 80,  120, 160, 200, 240, 280],
      density:8
    },
    
  };
afterfoodRange: any = {
    start: 200,
    behaviour: 'drag',
    connect: 'lower',
    direction: 'ltr',
    tooltips: [true],
    range: {
      min: 100,
      max: 400
    },

    pips: {
      mode: 'values', //there were too much pips to see anything
      values: [100, 150,  200, 250, 300, 350, 400],
      density:8
    },
    
  };

 rbsRange: any = {
    start: 200,
    behaviour: 'drag',
    connect: 'lower',
    direction: 'ltr',
    tooltips: [true],
    range: {
      min: 70,
      max: 300
    },

    pips: {
      mode: 'values', //there were too much pips to see anything
      values: [70, 110,  150, 190, 230, 270, 300],
      density:8
    },
    
  };
  hba1cRange: any = {
    start: 15,
    behaviour: 'drag',
    connect: 'lower',
    direction: 'ltr',
    tooltips: [true],
    range: {
      min: 1,
      max: 20
    },

    pips: {
      mode: 'values', //there were too much pips to see anything
      values: [1, 4,  8, 12, 16, 20],
      density:8
    },
    
  };

}
