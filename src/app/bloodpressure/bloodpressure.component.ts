import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-bloodpressure',
  templateUrl: './bloodpressure.component.html',
  styleUrls: ['./bloodpressure.component.css']
})
export class BloodpressureComponent implements OnInit {
 

  constructor() {}
 

  ngOnInit() {
    
  }
    ngOnDestroy() {
   
       
    }

    systolicRange: any = {
        start: 120,
        behaviour: 'drag',
        connect: 'lower',
        direction: 'ltr',
        tooltips: [true],

        range: {
          min: 1,
          max: 300
        },
      
        pips: {
          mode: 'values', //there were too much pips to see anything
          values: [20, 60,  120, 180, 240,   300],
          density:8
        },
        
      };
    
      diatolicRange: any = {
        start: 80,
        behaviour: 'drag',
        connect: 'lower',
        direction: 'ltr',
        tooltips: true,
        range: {
          min: 1,
          max: 120
        },
    
        pips: {
          mode: 'values', //there were too much pips to see anything
          values: [20, 40,  60,  80, 100, 120],
          density:8
        },
        
      };
};
