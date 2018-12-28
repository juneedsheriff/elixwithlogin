import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cholesterol',
  templateUrl: './cholesterol.component.html',
  styleUrls: ['./cholesterol.component.css']
})
export class CholesterolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  totalcholesterolRange: any = {
    start: 300,
    behaviour: 'drag',
    connect: 'lower',
    direction: 'ltr',
    tooltips: [true],
    range: {
      min: 40,
      max: 600
    },

    pips: {
      mode: 'values', //there were too much pips to see anything
      values: [40, 100,  200, 300, 400, 500, 600],
      density:8
    },
    
  };

 hdlRange: any = {
    start: 60,
    behaviour: 'drag',
    connect: 'lower',
    direction: 'ltr',
    tooltips: [true],
    range: {
      min: 20,
      max: 100
    },

    pips: {
      mode: 'values', //there were too much pips to see anything
      values: [20, 40,  60, 80, 100],
      density:8
    },
    
  };
  ldlRange: any = {
    start: 125,
    behaviour: 'drag',
    connect: 'lower',
    direction: 'ltr',
    tooltips: [true],
    range: {
      min: 50,
      max: 250
    },

    pips: {
      mode: 'values', //there were too much pips to see anything
      values: [50, 75,  100, 125, 150, 175, 200, 225, 250],
      density:8
    },
    
  };
  triglyceridesRange: any = {
    start: 280,
    behaviour: 'drag',
    connect: 'lower',
    direction: 'ltr',
    tooltips: [true],
    range: {
      min: 80,
      max: 680
    },

    pips: {
      mode: 'values', //there were too much pips to see anything
      values: [80, 180,  280, 380, 480, 580, 680],
      density:8
    },
    
  };
}
