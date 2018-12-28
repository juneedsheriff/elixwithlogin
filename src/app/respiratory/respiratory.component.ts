import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-respiratory',
  templateUrl: './respiratory.component.html',
  styleUrls: ['./respiratory.component.css']
})
export class RespiratoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  respiratoryRange: any = {
    start: 20,
    behaviour: 'drag',
    connect: 'lower',
    direction: 'ltr',
    tooltips: [true],

    range: {
      min: 10,
      max: 40,
    },
  
    pips: {
      mode: 'values', //there were too much pips to see anything
      values: [10,  15, 20, 25, 30, 35, 40 ],
      density:8
    },
    
  };
}
